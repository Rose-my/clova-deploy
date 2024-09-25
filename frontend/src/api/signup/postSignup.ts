import api from "../api";

interface PostSignupTypes {
  username: string;
  password: string;
  nickname: string;
}

export async function postSignup(props: PostSignupTypes) {
  const { nickname, username, password } = props;
  const { data } = await api.post("/accounts/signup/", {
    nickname: nickname,
    username: username,
    password: password,
  });

  return data;
}
