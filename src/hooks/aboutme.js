import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ? Fetching Projects Data ----------------------------------------------------------/

export const Usefetchme = () => {
  return useQuery({
    queryKey: ["mydata"],
    queryFn: async () =>
      await axios.get("/api/about?_id=659bb1e400af39a4b4d5723e"),
    refetchInterval: 5000,
  });
};
