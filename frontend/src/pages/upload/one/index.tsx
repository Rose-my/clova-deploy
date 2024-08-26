import styled from "styled-components";

import Item from "../components/Item";
import { BackIc } from "@assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function index() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lostImgUrl } = location.state as { lostImgUrl: File };

  return (
    <Container>
      <BtnWrapper type="button" onClick={() => navigate("/mypage/upload")}>
        <BackIcon />
      </BtnWrapper>
      <Image src={URL.createObjectURL(lostImgUrl)} alt="LostItem" />
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
