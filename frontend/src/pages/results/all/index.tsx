import styled from "styled-components";
import LOSTITEMS from "@core/lostItemsData";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@pages/search/components/Footer";

export default function index() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header title="검색결과" url="/search" />
      <Text>검색 결과를 모두 보여드려요.</Text>
      <FullItems>
        {LOSTITEMS.map((item) => (
          <Item type="button" key={item.id} onClick={() => navigate("/posts-one")}>
            <Image src={item.img} alt={`Lost Item ${item.id}`} />
            <Details>
              <Title>에어팟 프로</Title>
              <Small>
                <Found>{item.location}</Found>
                <Date>{item.date}</Date>
              </Small>
              <Location>{item.location}</Location>
            </Details>
          </Item>
        ))}
      </FullItems>
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

const FullItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  padding: 0 0 8rem;
`;

const Image = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

const Item = styled.button`
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  border-bottom: 1px solid #eee;
  text-align: center;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.6rem;
  text-align: left;
`;

const Location = styled.p`
  color: #197a3a;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

const Small = styled.span`
  display: flex;
  gap: 0.4rem;
`;

const Found = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
  text-align: left;
`;

const Date = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
`;
