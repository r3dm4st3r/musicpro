import { fetcher } from "@/services/api/fetcher";

export const fetchPlaylists = async () => {
  return await fetcher("/playlists").then((data) => data.data);
};

export const fetchPlaylistDetails = async (id: string) => {
  return await fetcher(`/playlists/${id}`).then((data) => data.data);
};
