import { BackIc, LogoTxtIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CustomCheckbox from "./components/CustomCheckbox";

export default function index() {
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

  return (
    <Container>
      <BackBtn type="button" onClick={moveToLogin}>
        <BackIcon />
      </BackBtn>
      <LogoContainer>
        <LogoTxtIcon />
      </LogoContainer>

      <SignupFields>
        <FieldText>아이디</FieldText>
        <IdBox>
          <IdField type="text" placeholder="아이디" />
          <DomainText>@ewha.ac.kr</DomainText>
          <SendCodeBtn type="button" onClick={handleSendCode}>
            인증코드 보내기
          </SendCodeBtn>
        </IdBox>
        {showCodeInput && (
          <div>
            <FieldText>인증코드 입력</FieldText>
            <CodeBox>
              <CodeField type="text" placeholder="인증코드 입력" />
              <Countdown>{formatTime(timeLeft)}</Countdown>
            </CodeBox>
          </div>
        )}
        <FieldText>비밀번호</FieldText>
        <PwBox>
          <PwField type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        </PwBox>
        <FieldText>비밀번호 확인</FieldText>
        <PwBox>
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
        <FieldText>닉네임</FieldText>
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
        <CustomCheckbox
          checked={termsAccepted}
          onChange={() => {
            const newChecked = !termsAccepted;
            setTermsAccepted(newChecked);
            setMandatoryAccepted(newChecked);
            setOptionalAccepted(newChecked);
          }}
          label="약관 전체동의"
        />
        <CustomCheckbox
          checked={mandatoryAccepted}
          onChange={() => {
            const newChecked = !mandatoryAccepted;
            setMandatoryAccepted(newChecked);
            if (!newChecked) setTermsAccepted(false); // Uncheck "Agree All" if 필수 is unchecked
          }}
          label="(필수) 이용약관 및 개인정보수집 정보동의"
        />
        <CustomCheckbox
          checked={optionalAccepted}
          onChange={() => {
            const newChecked = !optionalAccepted;
            setOptionalAccepted(newChecked);
            if (!newChecked) setTermsAccepted(false); // Uncheck "Agree All" if 선택 is unchecked
          }}
          label="(선택) 이벤트 혜택 및 광고성 정보동의"
        />
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
  width: 100%;
  height: 100dvh;
  padding: 4rem 2rem;
`;

// ----- 뒤로가기버튼
const BackBtn = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const BackIcon = styled(BackIc)`
  width: 2.7rem;
  height: 2.1rem;
  margin-bottom: 2rem;
`;

// ----- 로고
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTxtIcon = styled(LogoTxtIc)`
  width: 12.28rem;
  height: 3.4668rem;
  margin-bottom: 3rem;
`;

// ----- 입력 필드
const SignupFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
`;

const FieldText = styled.p`
  ${({ theme }) => theme.fonts.Field};

  margin-bottom: 0.5rem;
  color: #696969;
  font-size: 1.2rem;
`;

//-----아이디 필드
const IdBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;
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
  ${({ theme }) => theme.fonts.Field};

  margin-left: 0.5rem;
  color: #495057;
  font-size: 1.3rem;
`;

const SendCodeBtn = styled.button`
  margin-left: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 7px;
  background-color: #8c8c8c;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #197a3a;
    box-shadow: 0 4px 12px rgb(0 10 2 / 40%);
  }

  &:active {
    background-color: #15642f;
  }
`;

const CodeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
  ${({ theme }) => theme.fonts.Field};

  margin-left: 1rem;
  color: #495057;
  font-size: 1.3rem;
`;

//-----패스워드 입력

const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  font-size: 1rem;
`;

const NicknameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
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
  margin-top: 1.5rem;
`;

const MandatoryNotice = styled.span`
  color: #dc3545;
  font-size: 0.8rem;
`;

const SignupBtn = styled.button<{ disabled: boolean }>`
  margin-top: 3rem;
  padding: 0.85rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#ced4da" : "#197a3a")};
  color: white;
  font-size: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => !disabled && "#197a3a"};
    box-shadow: ${({ disabled }) => !disabled && "0 4px 12px rgb(0 10 2 / 40%)"};
  }

  &:active {
    background-color: ${({ disabled }) => !disabled && "#28a745"};
  }
`;
