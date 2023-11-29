import { fetcher } from "@/services/api/fetcher";

export const fetchAlbums = async () => {
  return await fetcher("/albums").then((data) => data.data);
};

export const fetchAlbumDetails = async (id: string) => {
  return await fetcher(`/albums/${id}`).then((data) => data.data);
};
