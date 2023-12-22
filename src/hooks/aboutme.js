import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ? Fetching Projects Data ----------------------------------------------------------/

export const Usefetchme = () => {
  return useQuery({
    queryKey: ["mydata"],
    queryFn: async () =>
      await axios.get("/api/about?_id=6584c38162d394616ef0bc8d"),
    refetchInterval: 5000,
  });
};
