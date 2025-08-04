"use client";

import { TbPlayerTrackNext } from "@toolsify/icons/tb";
import { ActionIcon } from "@toolsify/core";
import { useAudioPlayer } from "react-use-audio-player";
import { usePlayer } from "@/hooks/usePlayer";
import { useHotkeys } from "@mantine/hooks";

const AudioPlayNext = () => {
  const { setSongIndex, songIndex, upcoming } = usePlayer();
  const { isReady } = useAudioPlayer();

  const handleNext = () => {
    setSongIndex(songIndex + 1);
  };

  useHotkeys([["n", () => handleNext()]]);

  return (
    <ActionIcon
      onClick={() => handleNext()}
      variant="subtle"
      w={40}
      h={40}
      disabled={!isReady || songIndex === upcoming.length - 1}
    >
      <TbPlayerTrackNext  />
    </ActionIcon>
  );
};

export default AudioPlayNext;
