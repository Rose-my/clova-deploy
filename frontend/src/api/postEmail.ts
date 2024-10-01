import api from "./api";

interface PostEmailTypes {
  email: string;
}

export async function postEmail(props: PostEmailTypes) {
  const { email } = props;
  const { data } = await api.post("/accounts/signupCode/", {
    email: email,
  });

  return data;
}
