import { LogoIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [mandatoryAccepted, setMandatoryAccepted] = useState(false);
  const [optionalAccepted, setOptionalAccepted] = useState(false);
  const [allFieldsValid, setAllFieldsValid] = useState(false);

  useEffect(() => {
    if (showCodeInput && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showCodeInput, timeLeft]);

  useEffect(() => {
    // Check if all fields are valid
    setAllFieldsValid(password !== "" && password === passwordCheck && nickname !== "" && mandatoryAccepted);
  }, [password, passwordCheck, nickname, mandatoryAccepted]);

  function moveToLogin() {
    navigate("/login");
  }

  function handleSendCode() {
    setShowCodeInput(true);
    setTimeLeft(300); // Reset the timer when clicking the button
    // Implement code sending logic here
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleAllTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTermsAccepted(checked);
    setMandatoryAccepted(checked);
    setOptionalAccepted(checked);
  };

  const handleMandatoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setMandatoryAccepted(checked);
    if (!checked) {
      setTermsAccepted(false); // Uncheck the "Agree All" if 필수 is unchecked
    }
  };

  const handleOptionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setOptionalAccepted(checked);
    if (!checked) {
      setTermsAccepted(false); // Uncheck the "Agree All" if 선택 is unchecked
    }
  };

  return (
    <Container>
      <BackBtn type="button" onClick={moveToLogin}>
        뒤로가기
      </BackBtn>
      <LogoIcon />
      <SignupFields>
        <IdBox>
          <IdField type="text" placeholder="아이디" />
          <DomainText>@ewha.ac.kr</DomainText>
          <SendCodeBtn type="button" onClick={handleSendCode}>
            인증코드 보내기
          </SendCodeBtn>
        </IdBox>
        {showCodeInput && (
          <CodeBox>
            <CodeField type="text" placeholder="인증코드 입력" />
            <Countdown>{formatTime(timeLeft)}</Countdown>
          </CodeBox>
        )}
        <PwBox>
          <PwField type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
          <PwCheckField
            type="password"
            placeholder="비밀번호 재입력"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            isValid={password !== "" && password === passwordCheck}
          />
          {password !== "" && passwordCheck !== "" && password !== passwordCheck && (
            <PasswordMismatchText>비밀번호가 일치하지 않습니다.</PasswordMismatchText>
          )}
        </PwBox>
        <NicknameBox>
          <NicknameField
            type="text"
            placeholder="닉네임 입력(10자 이내)"
            maxLength={10}
            value={nickname}
            onChange={handleNicknameChange}
          />
        </NicknameBox>
      </SignupFields>
      <Description>
        <Checkbox>
          <input type="checkbox" checked={termsAccepted} onChange={handleAllTermsChange} /> 약관 전체동의
        </Checkbox>
        <Checkbox>
          <input type="checkbox" checked={mandatoryAccepted} onChange={handleMandatoryChange} /> (필수) 이용약관 및
          개인정보수집 정보동의
        </Checkbox>
        <Checkbox>
          <input type="checkbox" checked={optionalAccepted} onChange={handleOptionalChange} /> (선택) 이벤트 혜택 및
          광고성 정보동의
        </Checkbox>
        {mandatoryAccepted === false && <MandatoryNotice>필수 약관에 동의해야 회원가입이 가능합니다.</MandatoryNotice>}
      </Description>
      <SignupBtn type="button" onClick={moveToLogin} disabled={!allFieldsValid}>
        회원가입
      </SignupBtn>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #f5f7fa;
`;

const BackBtn = styled.button`
  display: flex;
  border: none;
  background: none;
  color: #007bff;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const LogoIcon = styled(LogoIc)`
  width: 14rem;
  height: auto;
  margin-bottom: 2rem;
`;

const SignupFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 50rem;
`;

const IdBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const IdField = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
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

const DomainText = styled.span`
  margin-left: 0.5rem;
  color: #495057;
  font-size: 1rem;
`;

const SendCodeBtn = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
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

const CodeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeField = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
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

const Countdown = styled.span`
  margin-left: 1rem;
  color: #495057;
  font-size: 1rem;
`;

const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PwField = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
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

const PwCheckField = styled.input<{ isValid: boolean }>`
  padding: 0.75rem 1rem;
  border: 2px solid ${({ isValid }) => (isValid ? "#28a745" : "#ced4da")};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? "#28a745" : "#495057")};
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const PasswordMismatchText = styled.span`
  margin-top: -0.5rem;
  color: #dc3545;
  font-size: 0.875rem;
`;

const NicknameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NicknameField = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;

  input {
    margin-right: 0.5rem;
  }
`;

const MandatoryNotice = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
`;

const SignupBtn = styled.button<{ disabled: boolean }>`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#ced4da" : "#007bff")};
  color: white;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => !disabled && "#0056b3"};
    box-shadow: ${({ disabled }) => !disabled && "0 4px 12px rgb(0 123 255 / 40%)"};
  }

  &:active {
    background-color: ${({ disabled }) => !disabled && "#004494"};
  }
`;
