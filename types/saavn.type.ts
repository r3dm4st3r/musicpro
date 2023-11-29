import React from "react";

export interface IStream {
  bitrate: string;
  link: string;
}

export interface IImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
}
export interface ICurrentSong {
  id: string;
  title: string;
  type: string;
  language: string;
  year: string;
  duration: string;
  image: IImage;
  stream: {
    lowest: IStream;
    low: IStream;
    normal: IStream;
    high: IStream;
    highest: IStream;
  };
}
export interface IPlayer {
  current: ICurrentSong;
  setCurrent: React.Dispatch<React.SetStateAction<ICurrentSong>>;
  upcoming: ICurrentSong[];
  setUpcoming: React.Dispatch<React.SetStateAction<ICurrentSong[]>>;
  songIndex: number;
  setSongIndex: React.Dispatch<React.SetStateAction<number>>;
  audioSettings: IAudioSettings;
  setAudioSettings: React.Dispatch<React.SetStateAction<IAudioSettings>>;
}

export interface IMusicImage {
  id: string;
  alt: string;
  image: IImage;
  showLoader?: boolean;
}

export enum SpeedEnum {
  LOW = 0.75,
  NORMAL = 1,
  FAST = 1.2,
}

export enum QualityEnum {
  LOWEST = "lowest",
  LOW = "low",
  NORMAL = "normal",
  HIGH = "high",
  HIGHEST = "highest",
}

export interface IAudioSettings {
  autoplay: boolean;
  speed: SpeedEnum.LOW | SpeedEnum.NORMAL | SpeedEnum.FAST;
  quality:
    | QualityEnum.LOWEST
    | QualityEnum.LOW
    | QualityEnum.NORMAL
    | QualityEnum.HIGH
    | QualityEnum.HIGHEST;
}
