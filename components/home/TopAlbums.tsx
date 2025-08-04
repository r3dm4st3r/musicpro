import { TbMusicBolt } from "@toolsify/icons/tb";
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
        icon={<TbMusicBolt size={30} color="red" />}
      />
      <HomeCarousel data={response} />
    </div>
  );
};

export default TopAlbums;
