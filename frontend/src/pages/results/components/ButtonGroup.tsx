import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ButtonGroup() {
  const navigate = useNavigate();
  return (
    <Container>
      <Btn type="button" onClick={() => navigate("/results-all")}>
        전체 검색 결과보러가기
      </Btn>
      <InstructionText>내 물건이 없다면 키워드 알림 설정을 추천드려요</InstructionText>
      <Btn type="button" onClick={() => navigate("/mypage/keyword")}>
        키워드 알림 설정
      </Btn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem 10rem;
  background-color: #f9f9f9;
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
