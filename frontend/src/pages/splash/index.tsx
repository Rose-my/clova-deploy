import { LogoTxtIc, LogoIc } from "@assets/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function index() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); // 3초 후에 로그인 페이지로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
        <LogoTxtIcon />
      </LogoContainer>
      <Text>클릭 한번에 바로 찾는 분실물</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin-top: 19.1rem;
`;

const LogoTxtIcon = styled(LogoTxtIc)`
  width: 15rem;
  height: 3.9rem;
`;

const LogoIcon = styled(LogoIc)`
  width: 10rem;
  height: 10rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.8rem;
`;
