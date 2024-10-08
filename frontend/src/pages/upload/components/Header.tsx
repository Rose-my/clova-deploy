import { BackIc } from "@assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  url: string;
  isMyPage?: boolean;
}

export default function Header(props: Props) {
  const { title, url, isMyPage } = props;
  const navigate = useNavigate();
  return (
    <Container>
      {!isMyPage && (
        <BtnWrapper type="button" onClick={() => navigate(`${url}`)}>
          <BackIcon />
        </BtnWrapper>
      )}
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 4rem 2rem 3.5rem;
  background-color: white;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const BackIcon = styled(BackIc)`
  position: absolute;
  top: 4rem;
  left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;
