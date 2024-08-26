import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function index() {
  return (
    <Container>
      <Header title="공지사항" url="/mypage" />
      <NoNotiMessage>등록된 공지사항이 없습니다.</NoNotiMessage>
      <Footer />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  padding: 1rem;
  background-color: #f9f9f9;
`;

const NoNotiMessage = styled.p`
  padding: 10rem 2rem 0;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
`;
