import styled from "styled-components";
import { useState } from "react";
import LOSTITEMS from "@core/lostItemsData";
import Header from "../components/Header";
import { LeftArrowIc, RightArrowIc } from "@assets/index";
import Footer from "@pages/search/components/Footer";
import ButtonGroup from "../components/ButtonGroup";

export default function index() {
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
      <ButtonGroup />
      <Footer />
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
  background-color: #f9f9f9;
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
  padding: 0 0 1rem;
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
