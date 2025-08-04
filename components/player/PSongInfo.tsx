"use client";
import { Avatar, Text } from "@toolsify/core";
import { usePlayer } from "@/hooks/usePlayer";
import { useAudioPlayer } from "react-use-audio-player";
import SongDuration from "@/components/player/components/SongDuration";
import MusicImage from "@/components/cards/MusicImage";

const PSongInfo = () => {
  const { current } = usePlayer();
  const { isReady } = useAudioPlayer();
  return (
    <div className="flex items-center gap-2 w-full">
      <div>
        {isReady ? (
          <MusicImage
            id={current?.id}
            alt={current?.title}
            image={current.image}
            showLoader={false}
          />
        ) : (
          <Avatar radius={3} w={50} h={50} alt="test">
            PRO
          </Avatar>
        )}
      </div>
      {isReady && (
        <div>
          <Text
            fw="bold"
            fz={16}
            dangerouslySetInnerHTML={{ __html: current.title }}
            lineClamp={1}
          />
          <Text fz={14} className="capitalize">
            {current.language} : <SongDuration ready={isReady} />
          </Text>
        </div>
      )}
    </div>
  );
};

export default PSongInfo;
