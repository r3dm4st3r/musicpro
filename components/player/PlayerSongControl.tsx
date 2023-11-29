"use client";
import { ActionIcon } from "@mantine/core";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useHotkeys, useIsomorphicEffect } from "@mantine/hooks";
import { usePlayer } from "@/hooks/usePlayer";
import AudioPlayPrev from "@/components/player/controls/AudioPlayPrev";
import AudioPlayNext from "@/components/player/controls/AudioPlayNext";

const PlayerSongControl = () => {
  const {
    load,
    togglePlayPause,
    playing,
    volume,
    stop,
    isReady,
    isLoading,
    mute,
    muted,
    play,
    pause,
  } = useGlobalAudioPlayer();
  const {
    current,
    setCurrent,
    setSongIndex,
    songIndex,
    upcoming,
    audioSettings,
  } = usePlayer();

  // Play song on play button
  useIsomorphicEffect(() => {
    if (current.id) {
      load(current.stream[audioSettings.quality].link, {
        autoplay: audioSettings.autoplay,
        html5: true,
        initialVolume: volume,
        onend: () => setSongIndex(songIndex + 1),
      });
    }
  }, [current.id, audioSettings.quality, audioSettings.autoplay]);

  // Add songs from Queue
  useIsomorphicEffect(() => {
    if (upcoming.length > 0 && songIndex <= upcoming.length - 1) {
      setCurrent(upcoming[songIndex]);
    } else {
      stop();
    }
  }, [songIndex]);

  // Set metadata for system player
  useIsomorphicEffect(() => {
    if (current?.id) {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: current?.title?.replaceAll("&quot;", "") ?? "Loading...",
          artwork: [
            {
              src: current?.image?.large,
              sizes: "500x500",
              type: "image/png",
            },
          ],
        });

        navigator.mediaSession.setActionHandler("play", play);
        navigator.mediaSession.setActionHandler("pause", pause);
        navigator.mediaSession.setActionHandler("nexttrack", () => {
          setSongIndex(
            songIndex === upcoming.length - 1
              ? upcoming.length - 1
              : songIndex + 1,
          );
        });
        navigator.mediaSession.setActionHandler("previoustrack", () => {
          setSongIndex(songIndex === 0 ? 0 : songIndex - 1);
        });
      }
    }
  }, [current?.id]);

  useHotkeys([["space", () => togglePlayPause()]]);
  useHotkeys([["m", () => mute(!muted)]]);

  return (
    <div className="flex items-center justify-end sm:justify-center gap-2 w-auto">
      <AudioPlayPrev />
      <ActionIcon
        onClick={() => togglePlayPause()}
        variant="light"
        w={50}
        h={50}
        radius="100%"
        disabled={!isReady}
        loading={isLoading}
      >
        {!playing ? (
          <IconPlayerPlay stroke={1.5} />
        ) : (
          <IconPlayerPause stroke={1.5} />
        )}
      </ActionIcon>
      <AudioPlayNext />
    </div>
  );
};

export default PlayerSongControl;
