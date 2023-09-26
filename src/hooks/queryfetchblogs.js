import { useQuery } from "@tanstack/react-query";

export const blogfetch = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: async () => await fetch("/api/blog").then((res) => res.json()),
    cacheTime : 1000,
  });
};
