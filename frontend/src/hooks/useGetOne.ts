import { useQuery } from "react-query";
import { getOne } from "@api/getOne";

export function useGetOne(lostid: number) {
  const { data } = useQuery(["getOne", lostid], () => getOne(lostid), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return { data };
}
