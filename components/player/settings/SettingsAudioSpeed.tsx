"use client";
import { TbRocket } from "@toolsify/icons/tb";
import { Button } from "@toolsify/core";
import { usePlayer } from "@/hooks/usePlayer";
import { SpeedEnum } from "@/types/saavn.type";
import { useAudioPlayer } from "react-use-audio-player";
import { useIsomorphicEffect } from "@mantine/hooks";
import { playSpeed } from "@/components/player/player.constant";

const SettingsAudioSpeed = () => {
  const { audioSettings, setAudioSettings } = usePlayer();
  const { speed } = audioSettings;
  const { setRate } = useAudioPlayer();
  const handleClick = (value: SpeedEnum) => {
    setAudioSettings((prev) => {
      return {
        ...prev,
        speed: value,
      };
    });
  };

  // Update speed rate into the player
  useIsomorphicEffect(() => {
    if (speed) {
      setRate(speed);
    }
  }, [speed]);

  return (
    <div className="flex items-center justify-between gap-2">
      <h4 className="flex items-center gap-3">
        <TbRocket  />
        <span>Speed</span>
      </h4>
      <Button.Group>
        {playSpeed.map((audioSpeed, i) => {
          return (
            <Button
              key={i}
              size="compact-xs"
              variant={audioSpeed.speed === speed ? "filled" : "light"}
              value={speed}
              onClick={() => handleClick(audioSpeed.speed)}
            >
              {audioSpeed.label}
            </Button>
          );
        })}
      </Button.Group>
    </div>
  );
};

export default SettingsAudioSpeed;
