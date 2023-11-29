import { IconChartArcs3 } from "@tabler/icons-react";
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
          icon={<IconChartArcs3 size={30} color="orange" stroke={1.5} />}
        />
        <HomeCarousel data={response} />
      </div>
    )
  );
};

export default TopCharts;
