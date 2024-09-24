import { BackIc } from "@assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  isScrolled: boolean;
  setIsScrolled: (scroll: boolean) => void;
  subtitle?: string;
  url: string;
}

export default function Header(props: Props) {
  const { isScrolled, setIsScrolled, subtitle, url } = props;
  const navigate = useNavigate();
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
        <Title $isScrolled={isScrolled}>검색결과</Title>
      </Wrapper>
      <BtnWrapper type="button" onClick={() => navigate(`${url}`)}>
        <BackIcon $isScrolled={isScrolled} />
      </BtnWrapper>
      {!isScrolled && <Subtitle>{subtitle}</Subtitle>}
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
  padding: ${({ $isScrolled }) => ($isScrolled ? "2rem 1.6rem 0" : "4rem 1.6rem 1rem")};
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

const BackIcon = styled(BackIc)<{ $isScrolled: boolean }>`
  display: ${({ $isScrolled }) => ($isScrolled ? "none" : "flex")};
  position: absolute;
  top: 4rem;
  left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;
