"use client";
import { IconMusicCog } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { audioQuality } from "@/components/player/player.constant";
import { usePlayer } from "@/hooks/usePlayer";
import { QualityEnum } from "@/types/saavn.type";

const SettingsAudioQuality = () => {
  const { audioSettings, setAudioSettings } = usePlayer();
  const { quality } = audioSettings;

  const handleClick = (value: QualityEnum) => {
    setAudioSettings((prev) => {
      return {
        ...prev,
        quality: value,
      };
    });
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <h4 className="flex items-center gap-3">
        <IconMusicCog stroke={1.5} />
        <span>Audio Quality</span>
      </h4>
      <Button.Group w="100%">
        {audioQuality.map((songQuality, i) => {
          return (
            <Button
              fullWidth
              key={i}
              size="compact-xs"
              variant={songQuality.quality === quality ? "filled" : "light"}
              value={quality}
              onClick={() => handleClick(songQuality.quality)}
            >
              {songQuality.label}
            </Button>
          );
        })}
      </Button.Group>
    </div>
  );
};

export default SettingsAudioQuality;
