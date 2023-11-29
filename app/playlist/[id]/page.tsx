import { FC } from "react";
import { Metadata } from "next";
import { PageParams } from "@/types/index.type";
import { fetchPlaylistDetails } from "@/services/api/playlist.service";
import notFound from "@/app/not-found";
import MusicBannerInfo from "@/components/cards/MusicBannerInfo";
import MusicLists from "@/components/cards/MusicLists";
import MusicArtistWrapper from "@/components/cards/MusicArtistWrapper";

const fetchDetails = async (id: string) => {
  return await fetchPlaylistDetails(id).then((data) => data);
};

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const { id } = props.params;
  const response = await fetchDetails(id);
  return {
    title: `${response.title}`,
  };
}
const PlaylistDetailsPage: FC<PageParams> = async (props) => {
  const { id } = props.params;
  const response = await fetchDetails(id);

  if (!response) return notFound();
  return (
    <div>
      <MusicBannerInfo response={response} />
      <MusicLists response={response} />
      <div className="mt-5">
        <MusicArtistWrapper
          artists={response?.more_info?.artists}
          hideFansCount={true}
        />
      </div>
    </div>
  );
};

export default PlaylistDetailsPage;
