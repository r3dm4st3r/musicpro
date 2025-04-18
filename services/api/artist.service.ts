import {fetcher} from "@/services/api/fetcher";

export const fetchArtists = async () => {
  return await fetcher("/artists").then((data) => data.result);
};

export const fetchArtistDetails = async (id: string) => {
  return await fetcher(`/artists/${id}`).then((data) => data.result);
};
