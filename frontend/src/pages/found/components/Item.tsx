import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ItemProps {
  lostdate: string;
  losttime: string;
  description: string;
  title: string;
  moredesc: string;
  founded: boolean;
  getwhere: string;
  nowwhere: string;
}

export default function Item(props: ItemProps) {
  const { lostdate, losttime, description, title, moredesc, founded, getwhere, nowwhere } = props;
  const navigate = useNavigate();

  console.log(founded);
  return (
    <Container>
      <Details>
        <Title>{title}</Title>
        <SubDetail>
          <Wrapper>
            <Text>습득 장소</Text>
            <Found>{getwhere}</Found>
          </Wrapper>
          <Wrapper>
            <Text>습득 일자</Text>
            <NormalTxt>{lostdate}</NormalTxt>
          </Wrapper>
          <Wrapper>
            <Text>보관 장소</Text>
            <NormalTxt>{nowwhere}</NormalTxt>
          </Wrapper>
        </SubDetail>
        <Divider />
        <SubDetail>
          <Wrapper>
            <Text>습득 시간</Text>
            <NormalTxt>{losttime}</NormalTxt>
          </Wrapper>
          <Wrapper>
            <Text>물건 특징</Text>
            <NormalTxt>{description}</NormalTxt>
          </Wrapper>
          <Wrapper>
            <Text>전달 사항</Text>
            <NormalTxt>{moredesc}</NormalTxt>
          </Wrapper>
        </SubDetail>
        <Divider />
        <Notify>이 물건의 카테고리에 대한 키워드 알림을 설정해주세요</Notify>
      </Details>
      <BtnWrapper>
        <Btn type="button" onClick={() => navigate("/mypage/keyword")}>
          키워드 알림 설정
        </Btn>
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.2rem;
  padding: 0 2rem 10rem;
  background-color: #f9f9f9;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Field};

  margin-bottom: 1.5rem;
  color: black;
  font-size: 2.2rem;
`;

const SubDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgb(0 0 0 / 5%);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 100%;
`;

const Text = styled.p`
  flex-basis: 20%;
  color: #555;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Found = styled.p`
  color: #197a3a;
  font-size: 1.6rem;
  font-weight: 600;
`;

const NormalTxt = styled.p`
  width: 24rem;
  height: auto;
  color: #495057;
  font-size: 1.2rem;
  text-align: start;
  line-height: normal;
`;

const Notify = styled.p`
  margin-top: 2rem;
  color: #495057;
  font-size: 1.4rem;
  text-align: center;
`;

const Divider = styled.div`
  margin: 1.5rem 0;
  border-bottom: 1px solid #ececec;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Btn = styled.button`
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #197a3a;
  background-image: linear-gradient(to right, #197a3a, #1b9a5f);
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #14632d;
    box-shadow: 0 4px 12px rgb(0 123 85 / 30%);
  }

  &:active {
    background-color: #0f4f23;
  }
`;
