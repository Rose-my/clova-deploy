import styled from "styled-components";
import { LogoTxtIc, LogoIc } from "@assets/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin-top: 19.1rem;
`;

export const LogoTxtIcon = styled(LogoTxtIc)`
  width: 15rem;
  height: 3.9rem;
`;

export const LogoIcon = styled(LogoIc)`
  width: 10rem;
  height: 10rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.8rem;
`;
