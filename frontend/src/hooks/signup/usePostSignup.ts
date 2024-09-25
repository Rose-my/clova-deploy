import { useMutation } from "react-query";
import { postSignup } from "@api/signup/postSignup";
import { useNavigate } from "react-router-dom";

export function usePostSignup() {
  const navigate = useNavigate();

  return useMutation(postSignup, {
    onSuccess: (data) => {
      navigate("/login");
      console.log("회원가입 성공", data);
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
    },
  });
}
