import { useQuery } from "react-query";
import { getMyupload } from "@api/getMyupload";

export function useGetMyupload() {
  const { data, error } = useQuery("getMyupload", getMyupload, {
    onError: () => {
      console.log("내 등록 리스트 조회 에러", error);
    },
  });
  return { data, error };
}
