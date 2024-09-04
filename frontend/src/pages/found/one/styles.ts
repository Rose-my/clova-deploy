import styled from "styled-components";
import { BackIc } from "@assets/index";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #f9f9f9;
`;

export const BackIcon = styled(BackIc)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 35rem;
  object-fit: cover;
  object-position: center;
`;
