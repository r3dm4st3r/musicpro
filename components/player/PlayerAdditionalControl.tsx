import AudioRepeat from "@/components/player/controls/AudioRepeat";
import AudioVolume from "@/components/player/controls/AudioVolume";
import AudioPlayList from "@/components/player/controls/AudioPlayList";
import SongPlaylists from "@/components/player/components/SongPlaylists";
import AudioSettings from "@/components/player/controls/AudioSettings";

const PlayerAdditionalControl = () => {
  return (
    <div className="flex items-center justify-end gap-1 w-full">
      <AudioRepeat />
      <AudioVolume />
      <AudioPlayList>
        <SongPlaylists />
      </AudioPlayList>
      <AudioSettings />
    </div>
  );
};

export default PlayerAdditionalControl;
