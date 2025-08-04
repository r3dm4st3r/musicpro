"use client";
import { TbVolume, TbVolume2, TbVolumeOff } from "@toolsify/icons/tb";
import {
  ActionIcon,
  Menu,
  MenuDropdown,
  MenuTarget,
  Slider,
} from "@toolsify/core";
import { useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { useIsomorphicEffect } from "@mantine/hooks";

const AudioVolume = () => {
  const { volume, setVolume, isReady } = useAudioPlayer();
  const [value, setValue] = useState(volume * 100);

  useIsomorphicEffect(() => {
    if (value) {
      setVolume(value / 100);
    }
  }, [value]);

  return (
    <Menu
      shadow="md"
      width={120}
      arrowSize={10}
      withArrow
      transitionProps={{ transition: "pop", duration: 200 }}
      withinPortal={false}
    >
      <MenuTarget>
        <ActionIcon disabled={!isReady} variant="subtle" w={40} h={40}>
          {value === 0 ? (
            <TbVolumeOff />
          ) : value < 50 ? (
            <TbVolume2 />
          ) : (
            <TbVolume />
          )}
        </ActionIcon>
      </MenuTarget>
      <MenuDropdown>
        <Slider value={value} onChange={setValue} />
      </MenuDropdown>
    </Menu>
  );
};

export default AudioVolume;
