import { postUpload } from "@api/postUpload";
import { useMutation } from "react-query";

export function usePostUpload() {
  return useMutation(postUpload, {
    onSuccess: (data) => {
      console.log("등록 성공", data);
    },
    onError: (error) => {
      console.log("등록 실패", error);
    },
  });
}
