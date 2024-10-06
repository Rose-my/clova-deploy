import { getNotiOne } from "@api/getNotiOne";
import { useQuery } from "react-query";

export function useGetNotiOne(noticeid: number) {
  const { data } = useQuery(["getNotiOne", noticeid], () => getNotiOne(noticeid), {
    onSuccess: (data) => {
      console.log("공지사항 상세 불러오기 성공", data);
    },
    onError: (error) => {
      console.log("공지사항 상세 불러오기 성공", error);
    },
  });
  return { data };
}
