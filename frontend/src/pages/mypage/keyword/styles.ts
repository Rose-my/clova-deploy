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

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  padding: 0 2rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #4caf50;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #388e3c;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }

  &:active {
    background-color: #2e7d32;
  }
`;

export const KeywordsList = styled.ul`
  width: 100%;
  max-width: 400px;
  list-style-type: none;
  padding: 0 2rem;
`;

export const NoKeywordsMessage = styled.p`
  padding: 10rem 2rem 0;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
`;

export const KeywordItem = styled.li`
  ${({ theme }) => theme.fonts.Field};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  color: black;
  font-size: 2rem;
  transition: box-shadow 0.3s ease;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.3s ease;
`;
