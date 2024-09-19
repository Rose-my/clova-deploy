import { useNavigate } from "react-router-dom";
import * as L from "./styles";

export default function index() {
  const navigate = useNavigate();

  function moveToSignup() {
    navigate("/signup");
  }
  function moveToSearch() {
    navigate("/search");
  }

  return (
    <L.Container>
      <L.LogoIcon />
      <L.LogoTxt>클로바</L.LogoTxt>
      <L.InputFields>
        <L.IdContainer>
          <L.IdField as="textarea" placeholder="아이디" />
          <L.DomainText>@ewha.ac.kr</L.DomainText>
        </L.IdContainer>
        <L.PwField type="password" placeholder="비밀번호" />
      </L.InputFields>
      <L.LoginBtn type="button" onClick={moveToSearch}>
        로그인
      </L.LoginBtn>
      <L.ExtraBtns>
        <L.ExtraBtn type="button" onClick={moveToSignup}>
          회원가입
        </L.ExtraBtn>
        <L.ExtraBtn type="button">비밀번호 찾기</L.ExtraBtn>
      </L.ExtraBtns>
    </L.Container>
  );
}
