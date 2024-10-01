import { useNavigate } from "react-router-dom";
import * as L from "./styles";
import { usePostLogin } from "@hooks/usePostLogin";
import { useState } from "react";
import { LoginRes } from "types/types";
import { setToken } from "@utils/token";

export default function index() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const { mutate: postLoginMutate } = usePostLogin();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function moveToSignup() {
    navigate("/signup");
  }

  function moveToSearch() {
    postLoginMutate(
      {
        username: username,
        password: password,
      },
      {
        onSuccess: (res: LoginRes) => {
          const { access_token } = res.data;
          setMismatch(false);
          setToken(access_token);
        },
        onError: () => {
          setMismatch(true);
        },
      },
    );
  }

  return (
    <L.Container>
      <L.LogoIcon />
      <L.LogoTxt>클로바</L.LogoTxt>
      <L.InputFields>
        <L.IdContainer>
          <L.IdField type="text" placeholder="아이디" value={username} onChange={handleUsernameChange} />
          <L.DomainText>@ewha.ac.kr</L.DomainText>
        </L.IdContainer>
        <L.PwField type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
      </L.InputFields>
      <L.LoginBtn type="button" onClick={moveToSearch}>
        로그인
      </L.LoginBtn>
      {mismatch && <L.MismatchText>로그인 정보가 없습니다.</L.MismatchText>}
      <L.ExtraBtns>
        <L.ExtraBtn type="button" onClick={moveToSignup}>
          회원가입
        </L.ExtraBtn>
        <L.ExtraBtn type="button">비밀번호 찾기</L.ExtraBtn>
      </L.ExtraBtns>
    </L.Container>
  );
}
