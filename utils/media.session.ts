import { ICurrentSong } from "@/types/saavn.type";

export const mediaSession = (music: ICurrentSong) => {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: music?.title?.replaceAll("&quot;", "") ?? "Loading...",
      artwork: [
        {
          src: music?.image?.large,
          sizes: "500x500",
          type: "image/png",
        },
      ],
    });
  }
};
