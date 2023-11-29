"use client";
import React, { FC } from "react";
import { Box, Image } from "@mantine/core";
import { IMusicImage } from "@/types/saavn.type";
import { usePlayer } from "@/hooks/usePlayer";

const MusicImage: FC<IMusicImage> = ({ id, alt, image, showLoader = true }) => {
  const { current } = usePlayer();
  return (
    <Box w={50} h={50} className="relative">
      <Image
        radius={3}
        w={50}
        h={50}
        src={image?.medium}
        alt={`${alt}-${id}`}
        loading="lazy"
      />
      {id === current?.id && showLoader && (
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center rounded">
          <span className="c_loader"></span>
        </div>
      )}
    </Box>
  );
};

export default MusicImage;
