"use client";
import { IconVolume, IconVolume2, IconVolumeOff } from "@tabler/icons-react";
import {
  ActionIcon,
  Menu,
  MenuDropdown,
  MenuTarget,
  Slider,
} from "@mantine/core";
import { useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useIsomorphicEffect } from "@mantine/hooks";

const AudioVolume = () => {
  const { volume, setVolume, isReady } = useGlobalAudioPlayer();
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
            <IconVolumeOff stroke={1.5} />
          ) : value < 50 ? (
            <IconVolume2 stroke={1.5} />
          ) : (
            <IconVolume stroke={1.5} />
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
