import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ? Fetching Projects Data ----------------------------------------------------------/

export const Usefetchme = () => {
  return useQuery({
    queryKey: ["mydata"],
    queryFn: async () =>
      await axios.get("/api/about?_id=659bd7f444e8320ca55b97fb"),
    refetchInterval: 5000,
  });
};


