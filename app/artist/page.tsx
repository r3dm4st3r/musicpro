import { fetchArtists } from "@/services/api/artist.service";
import MusicArtistWrapper from "@/components/cards/MusicArtistWrapper";

const ArtistPage = async () => {
  const response = await fetchArtists().then((data) => data);
  return (
    <div>
      <MusicArtistWrapper artists={response} />
    </div>
  );
};

export default ArtistPage;
