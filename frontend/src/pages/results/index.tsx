import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import LOSTITEMS from "@core/lostItemsData";

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
      <p>검색결과</p>
      <p>가장 비슷한 상위 5개 분실물의</p>
      <Pagination>
        <ArrowButton onClick={prevItem}>&lt;</ArrowButton>
        {LOSTITEMS.map(
          (item, index) =>
            index === currentIndex && (
              <Item key={item.id}>
                <Image src={item.img} alt={`Lost Item ${item.id}`} />
                <Details>
                  <p>습득 시간</p>
                  <Date>{item.date}</Date>
                </Details>
                <Details>
                  <p>습득 장소</p>
                  <Location>{item.location}</Location>
                </Details>
              </Item>
            ),
        )}
        <ArrowButton onClick={nextItem}>&gt;</ArrowButton>
      </Pagination>
      <Btn type="button" onClick={() => navigate("/results-full")}>
        전체 검색 결과보러가기
      </Btn>
      <p>내 물건이 없다면 키워드 알림 설정을</p>
      <Btn type="button" onClick={() => navigate("/keyword-alert")}>
        키워드 알림 설정
      </Btn>
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

const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  color: #007bff;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

const Location = styled.p`
  color: #495057;
  font-size: 1.2rem;
`;

const Date = styled.p`
  color: #868e96;
  font-size: 1rem;
`;

const Details = styled.span`
  display: flex;
`;

const Btn = styled.button`
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
