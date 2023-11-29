"use client";
import { FC, useState } from "react";
import { Duration } from "@/utils";
import { useIsomorphicEffect } from "@mantine/hooks";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAudioPosition } from "@/hooks/useAudioPosition";

const SongDuration: FC<{ ready: boolean }> = (props) => {
  const { ready } = props;
  const { duration } = useGlobalAudioPlayer();
  const [remainingTime, setRemainingTime] = useState("");
  const position = useAudioPosition();

  useIsomorphicEffect(() => {
    const time = Duration(`${position}`);
    setRemainingTime(time);
  }, [position]);

  return (
    ready && (
      <span className="font-bold text-xs">
        {remainingTime} / {Duration(`${duration}`)}
      </span>
    )
  );
};

export default SongDuration;
