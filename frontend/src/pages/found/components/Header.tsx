import { useEffect } from "react";
import styled from "styled-components";

interface Props {
  isScrolled: boolean;
  setIsScrolled: (scroll: boolean) => void;
}

export default function Header(props: Props) {
  const { isScrolled, setIsScrolled } = props;
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container $isScrolled={isScrolled}>
      <Wrapper $isScrolled={isScrolled}>
        <Title $isScrolled={isScrolled}>습득물 모아보기</Title>
      </Wrapper>
      {!isScrolled && <Subtitle>습득 물품입니다.</Subtitle>}
    </Container>
  );
}

const Container = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: ${({ $isScrolled }) => ($isScrolled ? "2rem 1.6rem" : "4rem 1.6rem 1rem")};
  background-color: ${({ theme }) => theme.colors.main_bg};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none")};
  transition: all 0.3s ease;
`;

const Wrapper = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  justify-content: ${({ $isScrolled }) => ($isScrolled ? "none" : "center")};
`;

const Title = styled.h1<{ $isScrolled: boolean }>`
  font-size: ${({ $isScrolled }) => ($isScrolled ? "1.8rem" : "2rem")};
  transition:
    font-size 0.3s ease,
    color 0.3s ease;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.4rem;
  opacity: 1;
  transition:
    font-size 0.3s ease,
    opacity 0.3s ease;
`;
