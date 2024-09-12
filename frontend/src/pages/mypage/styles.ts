import styled from "styled-components";
import { MoveArrowIc, ProfileIc, EwhaPointIc, EmartPointIc } from "@assets/index";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const ProfileSection = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 315px;
  margin-top: 2rem;
  margin-top: ${({ $isScrolled }) => ($isScrolled ? "8rem" : "8rem")};
  padding: 1.8rem 1.5rem;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 10px 40px 0 rgb(0 0 0 / 3%);
`;

export const ProfileIcon = styled(ProfileIc)`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PointBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-top: 1.8rem;
`;

export const PointText = styled.p`
  font-family: Pretendard;
  color: #197a3a;
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 800;
`;

export const PointShopBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  margin-top: 1.8rem;
`;

export const PointShopText = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Nickname = styled.h2`
  margin-bottom: 0.5rem;
  color: #2f4f2f; /* Dark green for text */
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Id = styled.p`
  color: #6e7f6e; /* Muted green */
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  /* overflow: scroll; */
  width: 100%;
  max-width: 400px;
  margin-top: 5rem;
  padding: 0 4.2rem 10rem;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 5%);
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #52ad56, #1a761f); /* Darker green on hover */
    box-shadow: 0 4px 12px rgb(67 160 71 / 40%); /* Green shadow */
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(135deg, #388e3c, #2e7d32); /* Even darker green on active */
  }
`;

export const Point = styled.p`
  color: black;
  font-size: 2rem;
  font-weight: 400;
`;

export const Button = styled.button`
  padding: 2rem;
  border: none;
  border-radius: 8px;
  color: black;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
`;

export const MoveArrowIcon = styled(MoveArrowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const EwhaPointIcon = styled(EwhaPointIc)`
  width: 3.2rem;
  height: 3.2rem;
`;

export const EmartPointIcon = styled(EmartPointIc)`
  width: 3.2rem;
  height: 3.2rem;
`;
