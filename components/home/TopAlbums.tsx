import { IconMusicBolt } from "@tabler/icons-react";
import PageTitle from "@/components/common/heading/PageTitle";
import { fetchHome } from "@/services/api/home.service";
import HomeCarousel from "@/components/common/carousel/HomeCarousel";

const TopAlbums = async () => {
  const response = await fetchHome("albums");
  return (
    <div>
      <PageTitle
        title="Fresh Albums"
        color="red.1"
        icon={<IconMusicBolt size={30} color="red" stroke={1.5} />}
      />
      <HomeCarousel data={response} />
    </div>
  );
};

export default TopAlbums;
