import { BackIc } from "@assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  isScrolled: boolean;
  setIsScrolled: (scroll: boolean) => void;
}

export default function Header(props: Props) {
  const { isScrolled, setIsScrolled } = props;
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
        {!isScrolled && (
          <BtnWrapper type="button" onClick={() => navigate("/login")}>
            <BackIcon />
          </BtnWrapper>
        )}
        <Title $isScrolled={isScrolled}>클로바</Title>
      </Wrapper>
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
  ${({ theme }) => theme.fonts.LogoTxt};

  font-size: ${({ $isScrolled }) => ($isScrolled ? "1.8rem" : "3.8rem")};
  transition:
    font-size 0.3s ease,
    color 0.3s ease;
`;

const BackIcon = styled(BackIc)`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 2.4rem;
  height: 2.4rem;
`;
