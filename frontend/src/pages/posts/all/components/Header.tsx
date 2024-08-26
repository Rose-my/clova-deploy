import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>습득물</Title>
      <Subtitle>습득 물품입니다.</Subtitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 4rem 1.6rem 0;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.4rem;
  text-align: left;
`;
