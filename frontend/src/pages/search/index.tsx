import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function index() {
  const [ifGuideClicked, setIfGuideClicked] = useState(false);
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/results-top");
  };

  const handleGuidelineClick = () => {
    setIfGuideClicked(!ifGuideClicked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      if (name === "date") setDate(value);
      if (name === "startHour") setStartHour(value);
      if (name === "endHour") setEndHour(value);
    }
  };

  return (
    <Container>
      <InputFields>
        <SearchField type="text" placeholder="검색하고 싶은 물건에 대해 설명해주세요" />
        <Field>
          <Title>분실 시간</Title>
          <TimeContainer>
            <DateInput
              type="text"
              name="month"
              placeholder="2024년 8월 8일"
              value={date}
              onChange={handleInputChange}
            />
            <TimeInput
              type="text"
              name="startHour"
              value={startHour}
              placeholder="14"
              onChange={handleInputChange}
              maxLength={2}
            />
            <TimeText>시 부터</TimeText>
            <TimeInput
              type="text"
              name="endHour"
              value={endHour}
              placeholder="21"
              onChange={handleInputChange}
              maxLength={2}
            />
            <TimeText>시 사이</TimeText>
          </TimeContainer>
        </Field>
        <Field>
          <Title>분실 장소</Title>
          <LocationContainer>
            <LocationInput type="text" name="location" />
          </LocationContainer>
        </Field>
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

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.p`
  display: flex;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const LocationContainer = styled.div`
  display: flex;
`;

const DateInput = styled.input`
  width: auto;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  text-align: left;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 4px 12px rgb(0 123 255 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const TimeInput = styled.input`
  width: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  text-align: left;

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

const LocationInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  text-align: left;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 4px 12px rgb(0 123 255 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
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
