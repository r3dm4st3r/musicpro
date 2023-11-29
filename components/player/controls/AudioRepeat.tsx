"use client";
import { IconRepeatOff, IconRepeatOnce } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const AudioRepeat = () => {
  const { loop, looping, isReady } = useGlobalAudioPlayer();
  return (
    <ActionIcon
      disabled={!isReady}
      onClick={() => loop(!looping)}
      variant="subtle"
      w={40}
      h={40}
    >
      {!looping ? (
        <IconRepeatOff stroke={1.5} />
      ) : (
        <IconRepeatOnce stroke={1.5} />
      )}
    </ActionIcon>
  );
};

export default AudioRepeat;
