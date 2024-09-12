import styled from "styled-components";
import { PlusIc } from "@assets/index";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const FullItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  padding: 10rem 0 8rem;
  background-color: #f9f9f9;
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

export const BtnWrapper = styled.button`
  display: inline-flex;
  gap: 10px;
  align-items: flex-start;
  position: fixed;
  right: 2rem;
  bottom: 10rem;
  padding: 1.2rem;
  border-radius: 100px;
  background-color: #197a3a;
  cursor: pointer;
`;

export const PlusIcon = styled(PlusIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
