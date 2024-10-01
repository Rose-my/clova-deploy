import api from "./api";

interface PostLoginTypes {
  username: string;
  password: string;
}

export async function postLogin(props: PostLoginTypes) {
  const { username, password } = props;
  const { data } = await api.post("/accounts/login/", {
    username: username,
    password: password,
  });

  return data;
}
