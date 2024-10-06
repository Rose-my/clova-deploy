import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 12rem 2.4rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Date = styled.p`
  flex-basis: 20%;
  color: #197a3a;
  font-size: 1rem;
  font-weight: 500;
`;

export const Title = styled.p`
  color: #555;
  font-size: 1.6rem;
  font-weight: 600;
  ${({ theme }) => theme.fonts.TextArea};
`;

export const Text = styled.p`
  font-family: WavvePADO-Regular;
  color: #777;
  font-style: normal;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 140%; /* 25.2px */
`;
