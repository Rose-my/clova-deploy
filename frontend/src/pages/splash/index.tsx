import { LogoIc } from "@assets/index";
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
    <Wrapper>
      <LogoContainer>
        <LogoIcon />
        <Text>클릭 한번에 바로 찾는 분실물</Text>
      </LogoContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;

const LogoIcon = styled(LogoIc)`
  width: 15rem;
  height: 3.9rem;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
`;
