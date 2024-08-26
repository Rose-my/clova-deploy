import styled from "styled-components";
import BigImg from "@assets/lost.png";

import Footer from "../components/Footer";
import Item from "./components/Item";
import { BackIc } from "@assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();

  return (
    <Container>
      <BtnWrapper type="button" onClick={() => navigate("/posts-all")}>
        <BackIcon />
      </BtnWrapper>
      <Image src={BigImg} alt="LostItem" />
      <Item />
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
  background-color: #f9f9f9;
`;

const BackIcon = styled(BackIc)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const Image = styled.img`
  width: 100%;
  height: 35rem;
  object-fit: cover;
  object-position: center;
`;
