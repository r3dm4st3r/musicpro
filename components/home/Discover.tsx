import { TbAnalyze } from "@toolsify/icons/tb";
import { fetchHome } from "@/services/api/home.service";
import PageTitle from "@/components/common/heading/PageTitle";
import HomeCarousel from "@/components/common/carousel/HomeCarousel";
const Discover = async () => {
  const response = await fetchHome("discover");
  return (
    response && (
      <div>
        <PageTitle
          title="Discover"
          color="teal.1"
          icon={<TbAnalyze size={30} color="teal" />}
        />
        <HomeCarousel data={response} />
      </div>
    )
  );
};

export default Discover;
