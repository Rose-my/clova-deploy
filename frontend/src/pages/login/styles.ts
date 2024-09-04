import { LogoIc, LogoTxtIc } from "@assets/index";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 0 1.5rem;
`;

export const LogoIcon = styled(LogoIc)`
  width: 6.6rem;
  height: 6.4rem;
  margin-top: 8.7rem;
  margin-bottom: 1.5rem;
`;

export const LogoTxtIcon = styled(LogoTxtIc)`
  width: 14.5rem;
  height: 4rem;
  margin-bottom: 3rem;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 320px;
  margin-top: 3rem;
`;

export const IdContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Field = styled.input`
  flex: 1;
  ${({ theme }) => theme.fonts.Field};

  padding: 0.85rem 0;
  border: none;
  border-bottom: 2px solid #ced4da;
  color: black;
  font-size: 1.5rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: #495057;
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const DomainText = styled.span`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.5rem;
`;

export const LoginBtn = styled.button`
  width: 100%;
  ${({ theme }) => theme.fonts.Field};

  max-width: 320px;
  margin-top: 2rem;
  padding: 0.85rem;
  border: none;
  border-radius: 8px;
  background-color: #8c8c8c;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #197a3a;
    box-shadow: 0 4px 12px rgb(0 10 2 / 40%);
  }

  &:active {
    background-color: #197a3a;
  }
`;

export const ExtraBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  margin-top: 3rem;
`;

export const ExtraBtn = styled.button`
  ${({ theme }) => theme.fonts.Field};

  border: none;
  background: none;
  color: #8c8c8c;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #197a3a;
  }
`;
