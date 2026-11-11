import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generate, inlineParts, pcmToWav } from "./gemini.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../public/music");
fs.mkdirSync(outDir, { recursive: true });

const model = process.argv[2] ?? "lyria-3.5";
const name = process.argv[3] ?? "bed";
const prompt =
  process.argv[4] ??
  "Instrumental background music for a premium technology brand film, about 95 seconds long. Warm, confident and modern: soft felt piano motif, gentle pulsing synth bass, light organic percussion with a subtle Afrobeats-inspired groove, airy pads. Starts sparse and thoughtful, builds gradually with optimism, lifts in the final third, and ends on a clean resolved chord. No vocals, no lyrics, no spoken words. Leaves space for a voiceover. 100 BPM.";

const json = await generate(model, { contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseModalities: ["AUDIO", "TEXT"] } }, { retries: 1 });
const parts = inlineParts(json);
if (!parts.length) throw new Error("No audio returned: " + JSON.stringify(json).slice(0, 500));
parts.forEach((p, i) => {
  const isContainer = /RIFF|ID3|ftyp|OggS|fLaC/.test(p.buffer.subarray(0, 12).toString("latin1")) || /mpeg|mp3|ogg|flac|mp4|aac/.test(p.mimeType);
  const ext = /mpeg|mp3/.test(p.mimeType) ? "mp3" : /ogg/.test(p.mimeType) ? "ogg" : /flac/.test(p.mimeType) ? "flac" : /mp4|aac/.test(p.mimeType) ? "m4a" : "wav";
  const file = path.join(outDir, `${name}${i ? "-" + i : ""}.${ext}`);
  const rate = Number(p.mimeType.match(/rate=(\d+)/)?.[1] ?? 48000);
  fs.writeFileSync(file, isContainer ? p.buffer : pcmToWav(p.buffer, rate, 2));
  console.log(path.basename(file), p.mimeType, (p.buffer.length / 1e6).toFixed(1) + "MB");
});
