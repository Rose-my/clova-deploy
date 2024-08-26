import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

export default function index() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header title="검색결과" url="/search" />
      <Explanation>아쉽지만 검색결과가 없어요</Explanation>
      <Details>
        누군가 당신의 물건을 등록하면 빠르게 알려드릴게요!
        <br />
        키워드 알림 설정을 해보시겠어요?
      </Details>
      <Btn type="button" onClick={() => navigate("/mypage/keyword")}>
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
  height: 100dvh;
  background-color: white;
`;

const Explanation = styled.p`
  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 1.8rem;
  font-weight: 400;
`;

const Details = styled.p`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.Field};

  color: #8c8c8c;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
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
