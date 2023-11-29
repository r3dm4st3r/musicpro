import { FC } from "react";
import { PageParams } from "@/types/index.type";
import { fetchAlbumDetails } from "@/services/api/album.service";
import notFound from "@/app/not-found";
import MusicBannerInfo from "@/components/cards/MusicBannerInfo";
import MusicLists from "@/components/cards/MusicLists";
import MusicArtistWrapper from "@/components/cards/MusicArtistWrapper";
import { Metadata } from "next";

const fetchDetails = async (id: string) => {
  return await fetchAlbumDetails(id).then((data) => data);
};

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const { id } = props.params;
  const response = await fetchDetails(id);
  return {
    title: response?.title?.replaceAll("&quot;", ""),
  };
}

const AlbumDetailsPage: FC<PageParams> = async (props) => {
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

export default AlbumDetailsPage;
