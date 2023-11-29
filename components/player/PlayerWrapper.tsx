import PSongInfo from "@/components/player/PSongInfo";
import PlayerSongControl from "@/components/player/PlayerSongControl";
import PlayerAdditionalControl from "@/components/player/PlayerAdditionalControl";
import { SongSeekBar } from "@/components/player/components/SongSeekBar";

const PlayerWrapper = () => {
  return (
    <div className="flex items-center h-full w-full">
      <div className="absolute top-0 left-0 right-0">
        <SongSeekBar />
      </div>
      <div className="px-2 py-2.5 flex items-center justify-between gap-2 w-full">
        <PSongInfo />
        <PlayerSongControl />
        <PlayerAdditionalControl />
      </div>
    </div>
  );
};

export default PlayerWrapper;
