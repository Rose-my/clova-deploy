import { useState } from "react";
import styled from "styled-components";
import Search from "@pages/pretask/Search";

export default function index() {
  const [ifTimeClicked, setIfTimeClicked] = useState(false);
  const [ifLocationClicked, setIfLocationClicked] = useState(false);
  const [ifGuideClicked, setIfGuideClicked] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const handleSearchClick = () => {
    // Implement search functionality here
  };

  const handleTimeClick = () => {
    setIfTimeClicked(!ifTimeClicked);
  };

  const handleLocationClick = () => {
    setIfLocationClicked(!ifLocationClicked);
  };

  const handleGuidelineClick = () => {
    setIfGuideClicked(!ifGuideClicked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      if (name === "month") setMonth(value);
      if (name === "day") setDay(value);
      if (name === "hour") setHour(value);
    }
  };

  return (
    <Container>
      <InputFields>
        <SearchField type="text" placeholder="검색하고 싶은 물건에 대해 설명해주세요" />
        <InfoFields>
          <InfoBtn type="button" onClick={handleTimeClick}>
            <TimeIcon>🕒</TimeIcon>
            <p>분실 시간</p>
          </InfoBtn>
          {ifTimeClicked && (
            <TimeContainer>
              <TimeInput type="text" name="month" value={month} onChange={handleInputChange} maxLength={2} />
              <TimeText>월</TimeText>
              <TimeInput type="text" name="day" value={day} onChange={handleInputChange} maxLength={2} />
              <TimeText>일</TimeText>
              <TimeInput type="text" name="hour" value={hour} onChange={handleInputChange} maxLength={2} />
              <TimeText>시</TimeText>
            </TimeContainer>
          )}
          <InfoBtn type="button" onClick={handleLocationClick}>
            <TimeIcon>🕒</TimeIcon>
            <p>분실 장소</p>
          </InfoBtn>
          {ifLocationClicked && <Search />}
        </InfoFields>
      </InputFields>
      <SearchBtn type="button" onClick={handleSearchClick}>
        검색하기
      </SearchBtn>
      <Guideline type="button" onClick={handleGuidelineClick}>
        검색 가이드라인
      </Guideline>
      {ifGuideClicked && <NoticeText>분실 시간을 정확히 입력해주세요</NoticeText>}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f9f9f9;
`;

const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchField = styled.input`
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

const InfoFields = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
`;

const InfoBtn = styled.button`
  display: flex;
  position: relative;
  width: 100%;
  border: 2px solid #ced4da;
  border-radius: 10px;

  &::placeholder {
    color: #adb5bd;
  }
`;

const TimeIcon = styled.span`
  margin-right: 0.5rem;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute;
  top: 8rem;
  left: 0.5rem;
  z-index: 1;
  padding: 0.85rem 1.25rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  background-color: white;
`;

const TimeInput = styled.input`
  width: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 4px 12px rgb(0 123 255 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const TimeText = styled.span`
  color: #495057;
  font-size: 1rem;
`;

const SearchBtn = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1rem;
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

const Guideline = styled.button`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
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

const NoticeText = styled.span`
  display: block;
  justify-content: flex-start;
  margin-top: 1rem;
  color: #dc3545;
  font-size: 1rem;
`;
