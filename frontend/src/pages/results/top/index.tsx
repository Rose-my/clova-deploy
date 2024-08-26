import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import LOSTITEMS from "@core/lostItemsData";
import Header from "../components/Header";
import { LeftArrowIc, RightArrowIc } from "@assets/index";

export default function Index() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % LOSTITEMS.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + LOSTITEMS.length) % LOSTITEMS.length);
  };

  return (
    <Container>
      <Header title="검색결과" url="/search" />
      <Text>가장 비슷한 상위 5개 결과를 보여드려요.</Text>
      <Pagination>
        <ArrowButton onClick={prevItem}>
          <LeftArrowIcon />
        </ArrowButton>
        {LOSTITEMS.map(
          (item, index) =>
            index === currentIndex && (
              <Item key={item.id}>
                <Image src={item.img} alt={`Lost Item ${item.id}`} />
                <Details>
                  <Label>습득 장소</Label>
                  <Location>{item.location}</Location>
                </Details>
                <Details>
                  <Label>습득 일자</Label>
                  <Date>{item.date}</Date>
                </Details>
                <Details>
                  <Label>보관 장소</Label>
                  <Date>{item.location}</Date>
                </Details>
              </Item>
            ),
        )}
        <ArrowButton onClick={nextItem}>
          <RightArrowIcon />
        </ArrowButton>
      </Pagination>
      <ButtonGroup>
        <Btn type="button" onClick={() => navigate("/results-all")}>
          전체 검색 결과보러가기
        </Btn>
        <InstructionText>내 물건이 없다면 키워드 알림 설정을 추천드려요</InstructionText>
        <Btn type="button" onClick={() => navigate("/mypage/keyword")}>
          키워드 알림 설정
        </Btn>
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100dvh;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  margin-top: 6rem;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 1.4rem;
  font-weight: 400;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 3rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const RightArrowIcon = styled(RightArrowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const LeftArrowIcon = styled(LeftArrowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 10px;
  background: #f0f0f0;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
`;

const Image = styled.img`
  width: 29.7rem;
  height: 29.7rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
`;

const Label = styled.p`
  align-items: center;
  color: #495057;
  font-size: 1.3rem;
  font-weight: 400;
`;

const Location = styled.p`
  color: #197a3a;
  font-size: 2rem;
  font-weight: 700;
`;

const Date = styled.p`
  color: black;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Details = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem 3rem;
`;

const Btn = styled.button`
  width: 100%;
  ${({ theme }) => theme.fonts.Field};

  max-width: 297px;
  margin-top: 1.6rem;
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

const InstructionText = styled.p`
  margin-top: 4rem;
  color: #666;
  font-size: 1rem;
  text-align: center;
`;
