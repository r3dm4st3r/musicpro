import { TbChartArcs3 } from "@toolsify/icons/tb";
import { fetchHome } from "@/services/api/home.service";
import PageTitle from "@/components/common/heading/PageTitle";
import HomeCarousel from "@/components/common/carousel/HomeCarousel";
const TopPlaylists = async () => {
  const response = await fetchHome("playlists");
  return (
    response && (
      <div>
        <PageTitle
          title="Top Playlists"
          color="orange.1"
          icon={<TbChartArcs3 size={30} color="orange" />}
        />
        <HomeCarousel data={response} />
      </div>
    )
  );
};

export default TopPlaylists;
