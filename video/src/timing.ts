export const FPS = 30;
/** Frames each scene overlaps the previous one (the colour wipe). */
export const OVERLAP = 14;
/** Local frame at which a scene's voiceover starts. */
export const VO_AT = 16;

/** Scene lengths in frames. Each is its voiceover length plus breathing room. */
export const scenes = [
  { id: "hook", frames: 315 },
  { id: "intro", frames: 205 },
  { id: "build", frames: 475 },
  { id: "education", frames: 345 },
  { id: "almuminun", frames: 385 },
  { id: "studywise", frames: 320 },
  { id: "values", frames: 262 },
  { id: "cta", frames: 290 },
] as const;

export type SceneId = (typeof scenes)[number]["id"];

export const starts = scenes.reduce<number[]>((acc, s, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + scenes[i - 1].frames - OVERLAP);
  return acc;
}, []);

export const TOTAL = starts[starts.length - 1] + scenes[scenes.length - 1].frames;

/** Length of the music bed in seconds (public/music/bed.mp3). */
export const MUSIC_SECONDS = 95.2; // the file is 96.7s but its last 1.7s are silence
