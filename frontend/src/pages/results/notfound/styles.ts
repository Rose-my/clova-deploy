import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #f9f9f9;
`;

export const Explanation = styled.p`
  ${({ theme }) => theme.fonts.Field};

  color: black;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Details = styled.p`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.Field};

  color: #8c8c8c;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
`;

export const Btn = styled.button`
  width: 100%;
  ${({ theme }) => theme.fonts.Field};

  max-width: 297px;
  margin-top: 1.6rem;
  padding: 0.85rem;
  border: none;
  border-radius: 8px;
  background-color: #8c8c8c;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #197a3a;
    box-shadow: 0 4px 12px rgb(0 10 2 / 40%);
  }

  &:active {
    background-color: #197a3a;
  }
`;
