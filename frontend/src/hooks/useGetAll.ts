import { useQuery } from "react-query";
import { getAll } from "@api/getAll";

export function useGetAll() {
  const { data, error, refetch } = useQuery("getAll", getAll, {
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: () => {
      console.log("물품 리스트 조회 에러", error);
    },
  });
  return { data, error, refetch };
}
