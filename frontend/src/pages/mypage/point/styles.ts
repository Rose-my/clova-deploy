import styled from "styled-components";
import { EmartPointIc, EwhaPointIc } from "@assets/index";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100dvh
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.main_bg};
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  padding: 0 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const StoreButtons = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 0 2rem;
`;

export const StoreButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  ${({ theme }) => theme.fonts.Field};

  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #8c8c8c;
  font-size: 1.4rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const ProductList = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 400px;
  padding: 0 2rem 7rem;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreName = styled.span`
  margin-bottom: 0.6rem;
  color: #949494;
  font-size: 1.2rem;
`;

export const ProductName = styled.span`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ProductPoints = styled.span`
  margin-top: 4px;
  color: green;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const EwhaPointIcon = styled(EwhaPointIc)`
  width: 3.2rem;
  height: 3.2rem;
`;

export const EmartPointIcon = styled(EmartPointIc)`
  width: 3.2rem;
  height: 3.2rem;
`;
