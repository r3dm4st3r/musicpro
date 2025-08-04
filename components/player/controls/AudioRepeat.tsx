"use client";
import { TbRepeatOff, TbRepeatOnce } from "@toolsify/icons/tb";
import { ActionIcon } from "@toolsify/core";
import { useAudioPlayer } from "react-use-audio-player";

const AudioRepeat = () => {
  const { toggleLoop, isLooping, isReady } = useAudioPlayer();
  return (
    <ActionIcon
      disabled={!isReady}
      onClick={() => toggleLoop()}
      variant="subtle"
      w={40}
      h={40}
    >
      {!isLooping ? (
        <TbRepeatOff />
      ) : (
        <TbRepeatOnce />
      )}
    </ActionIcon>
  );
};

export default AudioRepeat;
