import Link from "next/link";
import {Image, Paper} from "@mantine/core";
import {IconAlbum} from "@tabler/icons-react";
import {fetchAlbums} from "@/services/api/album.service";
import PageTitle from "@/components/common/heading/PageTitle";

const AlbumPage = async () => {
  const response = await fetchAlbums().then((data) => data);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        <PageTitle
          title="Albums"
          color="orange.1"
          icon={<IconAlbum size={30} color="orange" stroke={1.5} />}
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

export default AlbumPage;
