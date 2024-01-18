import TrendingNow from "@/components/home/TrendingNow";
import TopAlbums from "@/components/home/TopAlbums";
import TopPlaylists from "@/components/home/TopPlaylists";
import TopCharts from "@/components/home/TopCharts";
import Discover from "@/components/home/Discover";

const HomePage = () => (
  <div>
    <div className="grid grid-rows-1 gap-5">
      <TrendingNow />
      <TopAlbums />
      <TopPlaylists />
      <TopCharts />
      <Discover />
    </div>
  </div>
);
export default HomePage;
