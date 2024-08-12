import { LogoIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function index() {
  const navigate = useNavigate();

  function moveToSignup() {
    navigate("/signup");
  }

  return (
    <Container>
      <LogoIcon />
      <InputFields>
        <IdField type="text" placeholder="아이디" />
        <PwField type="password" placeholder="비밀번호" />
      </InputFields>
      <LoginBtn type="button">로그인</LoginBtn>
      <ExtraBtns>
        <SignupBtn type="button" onClick={moveToSignup}>
          회원가입
        </SignupBtn>
        <FindPwBtn type="button">비밀번호 찾기</FindPwBtn>
      </ExtraBtns>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e9ecef;
`;

const LogoIcon = styled(LogoIc)`
  width: 14rem;
  height: auto;
  margin-bottom: 2.5rem;
`;

const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 22rem;
`;

const IdField = styled.input`
  padding: 0.85rem 1.25rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const PwField = styled.input`
  padding: 0.85rem 1.25rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  max-width: 22rem;
  margin-top: 1.25rem;
  padding: 0.85rem 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 12px rgb(0 123 255 / 40%);
  }

  &:active {
    background-color: #004494;
  }
`;

const ExtraBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 22rem;
  margin-top: 1rem;
`;

const SignupBtn = styled.button`
  border: none;
  background: none;
  color: #007bff;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const FindPwBtn = styled.button`
  border: none;
  background: none;
  color: #007bff;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;
