import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { envValue, pcmToWav, speak } from "./gemini.mjs";
import { scenes, voice } from "./script.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../public/vo");
fs.mkdirSync(outDir, { recursive: true });

const only = process.argv.slice(2);
const durations = fs.existsSync(path.join(outDir, "durations.json")) ? JSON.parse(fs.readFileSync(path.join(outDir, "durations.json"), "utf8")) : {};

for (const s of scenes) {
  if (only.length && !only.includes(s.id)) continue;
  const voiceId = envValue("GEMINI_VOICE_ID");
  if (!voiceId) throw new Error("GEMINI_VOICE_ID is missing from .env");
  const part = await speak({ model: voice.model, voice: voiceId, text: s.text, style: voice.style });
  const rate = Number(part.mimeType.match(/rate=(\d+)/)?.[1] ?? 24000);
  const isWav = part.buffer.subarray(0, 4).toString() === "RIFF";
  const wav = isWav ? part.buffer : pcmToWav(part.buffer, rate);
  fs.writeFileSync(path.join(outDir, `${s.id}.wav`), wav);
  const seconds = isWav ? (wav.length - 44) / (rate * 2) : part.buffer.length / (rate * 2);
  durations[s.id] = Number(seconds.toFixed(2));
  console.log(`${s.id}: ${durations[s.id]}s (${part.mimeType})`);
}

fs.writeFileSync(path.join(outDir, "durations.json"), JSON.stringify(durations, null, 2));
console.log("total:", Object.values(durations).reduce((a, b) => a + b, 0).toFixed(1) + "s");
