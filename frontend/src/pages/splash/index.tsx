import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function index() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); // 3초 후에 로그인 페이지로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoIcon />
        <S.LogoTxt>클로바</S.LogoTxt>
      </S.LogoContainer>
      <S.Text>클릭 한번에 바로 찾는 분실물</S.Text>
    </S.Container>
  );
}
