"use client";
import { TbSettings } from "@toolsify/icons/tb";
import { ActionIcon, Divider, Menu } from "@toolsify/core";
import SettingsAudioSpeed from "@/components/player/settings/SettingsAudioSpeed";
import SettingsAudioQuality from "@/components/player/settings/SettingsAudioQuality";
import SettingsAutoPlay from "@/components/player/settings/SettingsAutoPlay";

const AudioSettings = () => {
  return (
    <Menu
      width={300}
      transitionProps={{ transition: "pop", duration: 200 }}
      withArrow
      arrowSize={10}
      shadow="sm"
    >
      <Menu.Target>
        <ActionIcon variant="subtle" w={40} h={40}>
          <TbSettings />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown p={0}>
        <div className="flex items-center">
          <h3 className="font-bold flex items-center gap-2 p-3">
            <TbSettings />
            <span>Settings</span>
          </h3>
        </div>
        <Divider />
        <div className="p-3">
          <div className="grid grid-cols-1 gap-3">
            <SettingsAutoPlay />
            <SettingsAudioSpeed />
            <SettingsAudioQuality />
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AudioSettings;
