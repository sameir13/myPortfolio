import { useQuery } from "@tanstack/react-query";


// ? Fetching Projects Data ----------------------------------------------------------/

export const Usefetch = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: async () => await fetch("https://scriptwithsameer.vercel.app/api/projects").then((res) => res.json()),
    refetchInterval: 5000,
  });
};
