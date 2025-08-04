import {TbBolt} from "@toolsify/icons/tb";
import {fetchHome} from "@/services/api/home.service";
import PageTitle from "@/components/common/heading/PageTitle";
import HomeCarousel from "@/components/common/carousel/HomeCarousel";

const TrendingNow = async () => {
  const response = await fetchHome("trending");
  return (
    response && (
      <div>
        <PageTitle
          title="Trending Now"
          color="blue.1"
          icon={<TbBolt size={30} color="blue" />}
        />
        <HomeCarousel data={response} />
      </div>
    )
  );
};

export default TrendingNow;
