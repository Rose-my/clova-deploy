import { useQuery } from "react-query";
import { getNoti } from "@api/getNoti";

export function useGetNoti() {
  const { data, error } = useQuery("getNoti", getNoti, {
    onSuccess: (data) => {
      console.log("공지사항 조회 성공", data);
    },
    onError: () => {
      console.log("공지사항 조회 에러", error);
    },
  });
  return { data, error };
}
