"use client";
import React, { FC } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { usePlayer } from "@/hooks/usePlayer";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { ICurrentSong } from "@/types/saavn.type";

const PlaySong: FC<{ song: any; lists: any[]; index: number }> = ({
  song,
  lists,
  index,
}) => {
  const { current, setCurrent, setUpcoming, setSongIndex } = usePlayer();
  const { playing } = useGlobalAudioPlayer();

  const payload: ICurrentSong = {
    id: song?.id,
    title: song?.title,
    type: song?.type,
    language: song?.language,
    year: song?.year,
    duration: song?.duration,
    image: song?.image,
    stream: song?.stream,
  };

  const upcomingPayload: ICurrentSong[] = lists?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      type: item?.type,
      language: item?.language,
      year: item?.year,
      duration: item?.duration,
      image: item?.image,
      stream: item?.stream,
    };
  });

  const handlePlay = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrent(payload);
    setUpcoming(upcomingPayload);
    setSongIndex(index);
  };

  return (
    <ActionIcon
      size="lg"
      w={40}
      h={40}
      variant="subtle"
      aria-label="Play"
      type="button"
      onClick={(event) => handlePlay(event)}
    >
      {song?.id === current?.id && playing ? (
        <IconPlayerPause stroke={1.5} />
      ) : (
        <IconPlayerPlay stroke={1.5} />
      )}
    </ActionIcon>
  );
};

export default PlaySong;
