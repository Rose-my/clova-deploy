const ACCESS_TOKEN = "token";
const NICK_NAME = "nickname";
const USER_NAME = "username";

const getToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

const setToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

const getNickname = () => {
  return sessionStorage.getItem(NICK_NAME);
};

const setNickname = (nickname: string) => {
  sessionStorage.setItem(NICK_NAME, nickname);
};

const getId = () => {
  return sessionStorage.getItem(USER_NAME);
};

const setId = (username: string) => {
  sessionStorage.setItem(USER_NAME, username);
};

export { getToken, setToken, getNickname, setNickname, getId, setId };
