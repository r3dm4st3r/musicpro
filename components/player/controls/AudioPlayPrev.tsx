"use client";

import { IconPlayerTrackPrev } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { usePlayer } from "@/hooks/usePlayer";

const AudioPlayPrev = () => {
  const { setSongIndex, songIndex } = usePlayer();
  const { isReady } = useGlobalAudioPlayer();

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
      <IconPlayerTrackPrev stroke={1.5} />
    </ActionIcon>
  );
};

export default AudioPlayPrev;
