"use client";
import { TbMusicCheck } from "@toolsify/icons/tb";
import { Switch } from "@toolsify/core";
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
        <TbMusicCheck />
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
