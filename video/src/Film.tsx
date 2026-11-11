import React from "react";
import { AbsoluteFill, Sequence, interpolate } from "remotion";
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";
import { FPS, MUSIC_SECONDS, TOTAL, VO_AT, scenes, starts } from "./timing";
import { Hook } from "./scenes/Hook";
import { Intro } from "./scenes/Intro";
import { Build } from "./scenes/Build";
import { Education } from "./scenes/Education";
import { AlMuminun } from "./scenes/AlMuminun";
import { StudyWise } from "./scenes/StudyWise";
import { Values } from "./scenes/Values";
import { Cta } from "./scenes/Cta";

const components = { hook: Hook, intro: Intro, build: Build, education: Education, almuminun: AlMuminun, studywise: StudyWise, values: Values, cta: Cta };

// Trim the start of the music so its natural ending lands on the last frame.
const MUSIC_TRIM = Math.max(0, Math.round(MUSIC_SECONDS * FPS) - TOTAL);
const lastVoEnd = starts[starts.length - 1] + VO_AT + 200;

export const Film: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#0E1116" }}>
    {scenes.map((s, i) => {
      const C = components[s.id];
      return (
        <Sequence key={s.id} name={s.id} from={starts[i]} durationInFrames={s.frames} premountFor={FPS}>
          <C />
          <Sequence from={VO_AT} layout="none">
            <Audio src={staticFile(`vo/${s.id}.wav`)} />
          </Sequence>
        </Sequence>
      );
    })}
    <Audio
      src={staticFile("music/bed.mp3")}
      trimBefore={MUSIC_TRIM}
      volume={(f) =>
        interpolate(f, [0, 20, 60, lastVoEnd, lastVoEnd + 30, TOTAL - 20, TOTAL], [0, 0.4, 0.16, 0.16, 0.5, 0.5, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      }
    />
  </AbsoluteFill>
);
