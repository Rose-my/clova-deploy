import { postImage } from "@api/postImage";
import { useMutation } from "react-query";

export function usePostImage() {
  return useMutation(postImage, {
    onSuccess: (data) => {
      console.log("이미지 업로드 성공", data);
    },
    onError: (error) => {
      console.log("이미지 업로드 실패", error);
    },
  });
}
