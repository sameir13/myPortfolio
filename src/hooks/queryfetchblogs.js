import { useQuery } from "@tanstack/react-query";

// ? Fetching Blogs Data ----------------------------------------------------------/

export const blogfetch = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: async () => await fetch("/api/blog").then((res) => res.json()),
    refetchInterval: 5000,
  });
};
