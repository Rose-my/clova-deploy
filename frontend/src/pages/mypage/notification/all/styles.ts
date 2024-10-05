import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const NoNotiMessage = styled.p`
  padding: 20rem 2rem 0;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  padding: 12rem 0 0;
`;

export const SubDetail = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.5rem;
  border-bottom: 1px solid #eeee;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: baseline;
  width: 100%;
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
`;
