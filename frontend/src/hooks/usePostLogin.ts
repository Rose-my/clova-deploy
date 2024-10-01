import { postLogin } from "@api/postLogin";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export function usePostLogin() {
  const navigate = useNavigate();

  return useMutation(postLogin, {
    onSuccess: (data) => {
      navigate("/search");
      console.log("로그인 성공", data);
    },
    onError: (error) => {
      console.log("로그인 실패", error);
    },
  });
}
