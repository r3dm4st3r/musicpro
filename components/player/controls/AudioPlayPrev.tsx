"use client";

import { TbPlayerTrackPrev } from "@toolsify/icons/tb";
import { ActionIcon } from "@toolsify/core";
import { useAudioPlayer } from "react-use-audio-player";
import { usePlayer } from "@/hooks/usePlayer";

const AudioPlayPrev = () => {
  const { setSongIndex, songIndex } = usePlayer();
  const { isReady } = useAudioPlayer();

  const handleNext = () => {
    setSongIndex(songIndex - 1);
  };

  return (
    <ActionIcon
      onClick={() => handleNext()}
      variant="subtle"
      w={40}
      h={40}
      disabled={!isReady || songIndex === 0}
    >
      <TbPlayerTrackPrev />
    </ActionIcon>
  );
};

export default AudioPlayPrev;
