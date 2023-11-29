"use client";
import MusicListTable from "@/components/cards/MusicListTable";
import { usePlayer } from "@/hooks/usePlayer";

const SongLocalPlaylists = () => {
  const { upcoming: response } = usePlayer();
  return (
    <div>
      <MusicListTable response={response} mini={true} />
    </div>
  );
};

export default SongLocalPlaylists;
