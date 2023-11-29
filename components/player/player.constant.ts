import {
  IAudioSettings,
  ICurrentSong,
  QualityEnum,
  SpeedEnum,
} from "@/types/saavn.type";

export const musicImage: Pick<ICurrentSong, "image"> = {
  image: {
    tiny: "",
    small: "",
    medium: "",
    large: "",
  },
};

export const musicStream: Pick<ICurrentSong, "stream"> = {
  stream: {
    lowest: {
      bitrate: "",
      link: "",
    },
    low: {
      bitrate: "",
      link: "",
    },
    normal: {
      bitrate: "",
      link: "",
    },
    high: {
      bitrate: "",
      link: "",
    },
    highest: {
      bitrate: "",
      link: "",
    },
  },
};
export const currentSongDefault: ICurrentSong = {
  id: "",
  title: "",
  type: "",
  language: "",
  year: "",
  duration: "",
  ...musicImage,
  ...musicStream,
};

export const audioSettingsDefault: IAudioSettings = {
  autoplay: true,
  speed: SpeedEnum.NORMAL,
  quality: QualityEnum.HIGH,
};

export const playSpeed: { label: string; speed: SpeedEnum }[] = [
  {
    label: "Low",
    speed: SpeedEnum.LOW,
  },
  {
    label: "Normal",
    speed: SpeedEnum.NORMAL,
  },
  {
    label: "Fast",
    speed: SpeedEnum.FAST,
  },
];

export const audioQuality: { label: string; quality: QualityEnum }[] = [
  {
    label: "Lowest",
    quality: QualityEnum.LOWEST,
  },
  {
    label: "Low",
    quality: QualityEnum.LOW,
  },
  {
    label: "Normal",
    quality: QualityEnum.NORMAL,
  },
  {
    label: "High",
    quality: QualityEnum.HIGH,
  },
  {
    label: "Ultra",
    quality: QualityEnum.HIGHEST,
  },
];
