import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100dvh;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
`;

export const Text = styled.div`
  margin-top: 6rem;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const FullItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  padding: 0 0 8rem;
`;

export const Image = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const Item = styled.button`
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  border-bottom: 1px solid #eee;
  text-align: center;
  cursor: pointer;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  text-align: left;
`;

export const Location = styled.p`
  color: #197a3a;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

export const Small = styled.span`
  display: flex;
  gap: 0.4rem;
`;

export const Found = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
  text-align: left;
`;

export const Date = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
`;
