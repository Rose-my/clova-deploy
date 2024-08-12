import { useState } from "react";
import styled from "styled-components";
import Search from "@pages/pretask/Search";

export default function index() {
  const [ifTimeClicked, setIfTimeClicked] = useState(false);
  const [ifLocationClicked, setIfLocationClicked] = useState(false);
  const [ifGuideClicked, setIfGuideClicked] = useState(false);

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

  return (
    <Container>
      <InputFields>
        <SearchField type="text" placeholder="검색하고 싶은 물건에 대해 설명해주세요" />
        <InfoFields>
          <InfoBtn type="button" onClick={handleTimeClick}>
            <TimeIcon>🕒</TimeIcon>
            <p>분실 시간</p>
          </InfoBtn>
          {ifTimeClicked && <TimeField type="text" />}
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

const TimeField = styled.input`
  position: absolute;
  top: 8rem;
  left: 0.5rem;
  z-index: 1;
  padding: 0.85rem 1.25rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  background-color: white;
  color: #495057;
  font-size: 1rem;
  transition: border-color 0.3s ease;
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
