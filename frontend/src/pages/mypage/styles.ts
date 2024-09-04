import styled from "styled-components";
import { MoveArrowIc, ProfileIc } from "@assets/index";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.main_bg};
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const ProfileIcon = styled(ProfileIc)`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
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
  overflow: scroll;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  padding: 0 0 8rem;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
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
