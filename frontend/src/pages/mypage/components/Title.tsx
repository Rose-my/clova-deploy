import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>마이페이지</Text>
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

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 2rem;
  text-align: center;
`;
