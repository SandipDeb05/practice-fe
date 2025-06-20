import { useQuery } from "@tanstack/react-query";
import { KEY_POST_LISTS } from "../queryKeys/homeKeys";
import axiosInstance from "../../apis/axiosInstance";

export const useGetPostLists = () => {
  return useQuery({
    queryKey: [KEY_POST_LISTS],
    queryFn: () => {
      return axiosInstance.get("/posts");
    },
    select: (res) => res.data,
  });
};
