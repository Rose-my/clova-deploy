import { postEmail } from "@api/postEmail";
import { useMutation } from "react-query";

export function usePostEmail() {
  return useMutation(postEmail, {
    onSuccess: (data) => {
      // navigate("/login");
      console.log("이메일 인증코드 성공", data);
    },
    onError: (error) => {
      console.log("이메일 인증코드 실패", error);
    },
  });
}
