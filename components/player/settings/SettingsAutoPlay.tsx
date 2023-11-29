"use client";
import { IconMusicCheck } from "@tabler/icons-react";
import { Switch } from "@mantine/core";
import { usePlayer } from "@/hooks/usePlayer";

const SettingsAutoPlay = () => {
  const { audioSettings, setAudioSettings } = usePlayer();
  const { autoplay } = audioSettings;
  const handleChange = (checked: boolean) => {
    setAudioSettings((prev) => {
      return {
        ...prev,
        autoplay: checked,
      };
    });
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <h4 className="flex items-center gap-3">
        <IconMusicCheck stroke={1.5} />
        <span>Autoplay</span>
      </h4>
      <Switch
        checked={autoplay}
        onChange={(event) => handleChange(event.target.checked)}
        size="md"
        onLabel="ON"
        offLabel="OFF"
      />
    </div>
  );
};

export default SettingsAutoPlay;
