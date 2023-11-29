"use client";

import { IconPlayerTrackNext } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { usePlayer } from "@/hooks/usePlayer";

const AudioPlayNext = () => {
  const { setSongIndex, songIndex, upcoming } = usePlayer();
  const { isReady } = useGlobalAudioPlayer();

  const handleNext = () => {
    setSongIndex(songIndex + 1);
  };

  return (
    <ActionIcon
      onClick={() => handleNext()}
      variant="subtle"
      w={40}
      h={40}
      disabled={!isReady || songIndex === upcoming.length - 1}
    >
      <IconPlayerTrackNext stroke={1.5} />
    </ActionIcon>
  );
};

export default AudioPlayNext;
