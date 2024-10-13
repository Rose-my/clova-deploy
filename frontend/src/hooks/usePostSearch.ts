import { postSearch } from "@api/postSearch";
import { useMutation } from "react-query";

import { useNavigate } from "react-router-dom";

export function usePostSearch() {
  const navigate = useNavigate();

  return useMutation(postSearch, {
    onSuccess: (data) => {
      console.log("검색 성공", data);
      navigate("/results/top");
    },
    onError: (error) => {
      console.log("검색 실패", error);
    },
  });
}
