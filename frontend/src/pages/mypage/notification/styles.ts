import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 1rem;
  background-color: #f9f9f9;
`;

export const NoNotiMessage = styled.p`
  padding: 10rem 2rem 0;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
`;
