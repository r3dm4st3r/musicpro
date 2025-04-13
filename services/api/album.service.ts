import {fetcher} from "@/services/api/fetcher";

export const fetchAlbums = async () => {
  return await fetcher("/albums?page=0&size=60").then((data) => data.result);
};

export const fetchAlbumDetails = async (id: string) => {
  return await fetcher(`/albums/${id}`).then((data) => data.result);
};
