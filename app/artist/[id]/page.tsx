import { FC } from "react";
import { Metadata } from "next";
import { PageParams } from "@/types/index.type";
import { fetchArtistDetails } from "@/services/api/artist.service";
import notFound from "@/app/not-found";
import ArtistBanner from "@/components/cards/artist/ArtistBanner";
import ArtistSongs from "@/components/cards/artist/ArtistSongs";
import ArtistMusicInfo from "@/components/cards/artist/ArtistMusicInfo";

const fetchDetails = async (id: string) => {
  return await fetchArtistDetails(id).then((data) => data);
};

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const { id } = props.params;
  const response = await fetchDetails(id);
  return {
    title: `${response.name} - Fans ${response?.fan_count} - Followers ${response?.follower_count}`,
  };
}

const ArtistDetailsPage: FC<PageParams> = async (props) => {
  const { id } = props.params;
  const response = await fetchDetails(id);

  if (!response) return notFound();
  return (
    <div>
      <ArtistBanner response={response} />
      <div className="mb-5">
        <ArtistSongs name={response?.name} response={response?.songs} />
      </div>
      <div className="grid grid-rows-1 gap-5">
        <ArtistMusicInfo
          response={response?.playlists?.dedicated}
          title="Dedicated"
        />
        <ArtistMusicInfo response={response?.latest} title="Latest" />
        <ArtistMusicInfo response={response?.albums} title="Albums" />
        <ArtistMusicInfo
          response={response?.playlists?.featured}
          title="Featured"
        />
        <ArtistMusicInfo response={response?.singles} title="Singles" />
      </div>
    </div>
  );
};

export default ArtistDetailsPage;
