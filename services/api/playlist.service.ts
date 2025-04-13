import {fetcher} from "@/services/api/fetcher";

export const fetchPlaylists = async () => {
  return await fetcher("/playlists").then((data) => data.result);
};

export const fetchPlaylistDetails = async (id: string) => {
  return await fetcher(`/playlists/${id}`).then((data) => data.result);
};
