import { RequestInfo } from "undici-types";

export const fetcher = async (
  endpoint: RequestInfo,
  options?: RequestInit | undefined,
) => {
  const url = `${process.env.API_SERVER}${endpoint}`;
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 600,
    },
    ...options,
  }).then((res) => res.json());
};
