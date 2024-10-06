import { useQuery } from "react-query";
import { getShop } from "@api/getShop";

export function useGetShop() {
  const { data, error } = useQuery("getShop", getShop, {
    onError: () => {
      console.log("상점 리스트 조회 에러", error);
    },
  });
  return { data, error };
}
