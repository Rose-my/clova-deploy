const ACCESS_TOKEN = "token";

const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export { getToken, setToken };
