"use client";
import React, { useCallback, useRef, MouseEvent, FC } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Progress } from "@mantine/core";
import { useAudioPosition } from "@/hooks/useAudioPosition";

export const SongSeekBar: FC = () => {
  const { duration, seek } = useGlobalAudioPlayer();
  const position = useAudioPosition();

  const seekBarElem = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (event: MouseEvent) => {
      const { pageX: eventOffsetX } = event;

      if (seekBarElem.current) {
        const elementOffsetX = seekBarElem.current.offsetLeft;
        const elementWidth = seekBarElem.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
        seek(percent * duration);
      }
    },
    [duration, seek],
  );

  if (duration === Infinity) return null;

  return (
    <div className="cursor-pointer w-full h-1" ref={seekBarElem} onClick={goTo}>
      <Progress
        h={5}
        value={(position / duration) * 100}
        radius="xs"
        animated
      />
    </div>
  );
};
