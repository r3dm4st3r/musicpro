import { fetcher } from "@/services/api/fetcher";

class HomeService {
  home = async () => {
    return await fetcher("/home");
  };
}

export const fetchHome = async (
  type: "trending" | "discover" | "charts" | "albums" | "playlists",
) => {
  const hs = new HomeService();
  return await hs.home().then((data) => data.data?.[type]);
};
