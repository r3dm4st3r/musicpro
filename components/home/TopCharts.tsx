import { TbChartArcs3 } from "@toolsify/icons/tb";
import { fetchHome } from "@/services/api/home.service";
import PageTitle from "@/components/common/heading/PageTitle";
import HomeCarousel from "@/components/common/carousel/HomeCarousel";
const TopCharts = async () => {
  const response = await fetchHome("charts");
  return (
    response && (
      <div>
        <PageTitle
          title="Top Charts"
          color="orange.1"
          icon={<TbChartArcs3 size={30} color="orange" />}
        />
        <HomeCarousel data={response} />
      </div>
    )
  );
};

export default TopCharts;
