"use client";
import React, { FC } from "react";
import { Box, Drawer, Image, Text, useDisclosure } from "@toolsify/core";
import { IMusicImage } from "@/types/saavn.type";
import { usePlayer } from "@/hooks/usePlayer";
import { useAudioPlayer } from "react-use-audio-player";
import { AiFillPlaySquare } from "@toolsify/icons/ai";

const MusicImage: FC<IMusicImage> = ({ id, alt, image, showLoader = true }) => {
  const { current } = usePlayer();
  const { isPlaying, togglePlayPause } = useAudioPlayer();
  const [opened, { open, close }] = useDisclosure(false);

  const ResumePlayback: FC = () => {
    return (
      <div
        role="button"
        onClick={togglePlayPause}
        className="bg-black/40 absolute cursor-pointer inset-0 flex items-center justify-center rounded"
      >
        <AiFillPlaySquare />
      </div>
    );
  };

  const ShowMusicDetails: FC = () => {
    return (
      <div
        onClick={open}
        className="bg-black/40 absolute cursor-pointer inset-0 flex items-center justify-center rounded"
      >
        <span className="c_loader"></span>
      </div>
    );
  };

  return (
    <>
      <Box w={50} h={50} className="relative">
        <Image
          radius={3}
          w={50}
          h={50}
          src={image?.medium}
          alt={`${alt}-${id}`}
          loading="lazy"
          onClick={open}
          className="cursor-pointer"
        />
        {id === current?.id &&
          showLoader &&
          (isPlaying ? <ShowMusicDetails /> : <ResumePlayback />)}
      </Box>

      <Drawer
        position="bottom"
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        styles={{
          header: { boxShadow: "var(--mantine-shadow-md)" },
          title: { fontWeight: "bold" },
          inner: { padding: 0 },
          body: { padding: 0 },
        }}
        size="lg"
        title={
          <Text fw="bold" fz={24} dangerouslySetInnerHTML={{ __html: alt }} />
        }
      >
        <div className="p-5">
          <div>
            <Image
              radius={3}
              src={image?.large}
              alt={`${alt}-${id}`}
              loading="lazy"
              className="cursor-pointer"
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MusicImage;
