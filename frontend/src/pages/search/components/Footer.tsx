import styled from "styled-components";
import { FooterLocationIc, FooterMyIc, FooterSearchIc } from "assets/index";
import { BtnWrapper } from "@styles/commonStyle";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function moveToMypage() {
    navigate("/mypage");
  }

  /**검색하기 */
  function moveToExplore() {
    navigate("/search");
  }

  function moveToPosts() {
    navigate("/posts-all");
  }

  return (
    <Container>
      <BtnWrapper type="button" onClick={moveToPosts}>
        <FooterLocationIcon />
        <DeactivateText>분실물 찾기</DeactivateText>
      </BtnWrapper>
      <AcvBtnWrapper type="button" onClick={moveToExplore}>
        <FooterSearchIcon />
        <ActivateText>검색하기</ActivateText>
      </AcvBtnWrapper>
      <BtnWrapper type="button" onClick={moveToMypage}>
        <FooterMyIcon />
        <DeactivateText>마이페이지</DeactivateText>
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.2rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const AcvBtnWrapper = styled.button`
  padding: 0 1rem;
  border: none;
  border-radius: 10px;
  background: none;
  background-color: rgb(25 122 58 / 50%);
  cursor: pointer;
`;

const DeactivateText = styled.p`
  color: #3f3e3e;
`;

const ActivateText = styled.p`
  color: black;
`;

const FooterLocationIcon = styled(FooterLocationIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const FooterMyIcon = styled(FooterMyIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const FooterSearchIcon = styled(FooterSearchIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
