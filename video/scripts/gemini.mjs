import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(here, "../../.env");

/** Reads a value from the environment or the project-root .env. Values are never logged. */
export function envValue(name) {
  if (process.env[name]) return process.env[name];
  if (!fs.existsSync(envPath)) return "";
  const line = fs
    .readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(name + "="));
  return line ? line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "") : "";
}

const KEY = envValue("GEMINI_API_KEY");
if (!KEY) throw new Error("GEMINI_API_KEY is missing. Add it to the .env file in the project root.");
const redact = (s) => String(s).split(KEY).join("[redacted]");

/** Calls models/<model>:generateContent and returns the parsed JSON. Errors are redacted. */
export async function generate(model, body, { retries = 3 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": KEY },
      body: JSON.stringify(body),
    });
    if (res.ok) return await res.json();
    lastErr = new Error(`Gemini ${model} HTTP ${res.status}: ${redact(await res.text()).slice(0, 600)}`);
    if (res.status !== 429 && res.status < 500) throw lastErr;
    await new Promise((r) => setTimeout(r, 2500 * (attempt + 1)));
  }
  throw lastErr;
}

/** Returns every inline binary part of a generateContent response as { mimeType, buffer }. */
export function inlineParts(json) {
  const out = [];
  for (const c of json.candidates ?? []) {
    for (const p of c.content?.parts ?? []) {
      if (p.inlineData?.data) out.push({ mimeType: p.inlineData.mimeType, buffer: Buffer.from(p.inlineData.data, "base64") });
    }
  }
  return out;
}

/** Wraps raw 16-bit PCM in a WAV header. */
export function pcmToWav(pcm, sampleRate = 24000, channels = 1) {
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVEfmt ", 8);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * channels * 2, 28);
  header.writeUInt16LE(channels * 2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

/** Text-to-speech through the Interactions API (supports cloned voices). Returns { mimeType, buffer }. */
export async function speak({ model, voice, text, style }, { retries = 2 } = {}) {
  const body = {
    model,
    input: [
      {
        type: "user_input",
        content: [{ type: "text", text, ...(style ? { annotations: [{ type: "speech_metadata", style }] } : {}) }],
      },
    ],
    response_format: { type: "audio" },
    generation_config: { speech_config: [{ voice }] },
  };
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": KEY, "Api-Revision": "2026-05-20" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const json = await res.json();
      for (const step of json.steps ?? []) {
        if (step.type !== "model_output") continue;
        for (const block of step.content ?? []) {
          if (block.type === "audio" && block.data) {
            return { mimeType: block.mime_type ?? block.mimeType ?? "audio/wav", buffer: Buffer.from(block.data, "base64") };
          }
        }
      }
      throw new Error("No audio in response: " + redact(JSON.stringify(json)).slice(0, 300));
    }
    const msg = redact(await res.text()).split(voice).join("[voice]");
    lastErr = new Error(`Gemini TTS HTTP ${res.status}: ${msg.slice(0, 500)}`);
    if (res.status !== 429 && res.status < 500) throw lastErr;
    await new Promise((r) => setTimeout(r, 4000 * (attempt + 1)));
  }
  throw lastErr;
}
