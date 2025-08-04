import Link from "next/link";
import {Image, Paper} from "@toolsify/core";
import {TbPlaylist} from "@toolsify/icons/tb";
import {fetchPlaylists} from "@/services/api/playlist.service";
import PageTitle from "@/components/common/heading/PageTitle";

const PlaylistPage = async () => {
  const response = await fetchPlaylists().then((data) => data);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        <PageTitle
          title="Playlists"
          color="pink.1"
          icon={<TbPlaylist size={30} color="red" />}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {response?.records?.map((item: any) => {
          return (
            <Link key={item?.id} href={`/${item?.type}/${item?.id}`}>
              <Paper shadow="xs" p="0" mb={2} pos="relative">
                <Image radius="sm" src={item?.image?.large} alt={item?.title} />
              </Paper>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistPage;
