import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomCheckbox from "./components/CustomCheckbox";
import * as S from "./styles";

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
    <S.Container>
      <S.BackBtn type="button" onClick={moveToLogin}>
        <S.BackIcon />
      </S.BackBtn>
      <S.LogoContainer>
        <S.LogoTxtIcon />
      </S.LogoContainer>
      <S.SignupFields>
        <S.FieldText>아이디</S.FieldText>
        <S.IdBox>
          <S.IdField type="text" placeholder="아이디" />
          <S.DomainText>@ewha.ac.kr</S.DomainText>
          <S.SendCodeBtn type="button" onClick={handleSendCode}>
            인증코드 보내기
          </S.SendCodeBtn>
        </S.IdBox>
        {showCodeInput && (
          <div>
            <S.FieldText>인증코드 입력</S.FieldText>
            <S.CodeBox>
              <S.CodeField type="text" placeholder="인증코드 입력" />
              <S.Countdown>{formatTime(timeLeft)}</S.Countdown>
            </S.CodeBox>
          </div>
        )}
        <S.FieldText>비밀번호</S.FieldText>
        <S.PwBox>
          <S.PwField type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        </S.PwBox>
        <S.FieldText>비밀번호 확인</S.FieldText>
        <S.PwBox>
          <S.PwCheckField
            type="password"
            placeholder="비밀번호 재입력"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            isValid={password !== "" && password === passwordCheck}
          />
          {password !== "" && passwordCheck !== "" && password !== passwordCheck && (
            <S.PasswordMismatchText>비밀번호가 일치하지 않습니다.</S.PasswordMismatchText>
          )}
        </S.PwBox>
        <S.FieldText>닉네임</S.FieldText>
        <S.NicknameBox>
          <S.NicknameField
            type="text"
            placeholder="닉네임 입력(10자 이내)"
            maxLength={10}
            value={nickname}
            onChange={handleNicknameChange}
          />
        </S.NicknameBox>
      </S.SignupFields>
      <S.Description>
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
        {mandatoryAccepted === false && (
          <S.MandatoryNotice>필수 약관에 동의해야 회원가입이 가능합니다.</S.MandatoryNotice>
        )}
      </S.Description>
      <S.SignupBtn type="button" onClick={moveToLogin} disabled={!allFieldsValid}>
        회원가입
      </S.SignupBtn>
    </S.Container>
  );
}
