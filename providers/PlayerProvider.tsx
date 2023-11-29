"use client";
import React, { createContext, useState, FC, ReactNode } from "react";
import { IAudioSettings, ICurrentSong, IPlayer } from "@/types/saavn.type";
import {
  audioSettingsDefault,
  currentSongDefault,
} from "@/components/player/player.constant";

export const PlayerContext = createContext<IPlayer | undefined>(undefined);
const PlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<ICurrentSong>(currentSongDefault);
  const [upcoming, setUpcoming] = useState<ICurrentSong[]>([]);
  const [songIndex, setSongIndex] = useState(0);
  const [audioSettings, setAudioSettings] =
    useState<IAudioSettings>(audioSettingsDefault);

  return (
    <PlayerContext.Provider
      value={{
        current,
        setCurrent,
        upcoming,
        setUpcoming,
        songIndex,
        setSongIndex,
        audioSettings,
        setAudioSettings,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
