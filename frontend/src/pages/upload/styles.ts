import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 2rem;
  background-color: white;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const InstructionText = styled.p`
  margin-top: 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

export const NotiText = styled.p`
  padding: 0.8rem 0 1rem;
  color: red;
  font-size: 1.2rem;
  text-align: center;
`;

export const OptionText = styled.p`
  padding: 0.8rem 0 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

export const Form = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1.4rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #28a745;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  width: 100%;
  ${({ theme }) => theme.fonts.Field};

  max-width: 320px;
  margin-top: 2rem;
  padding: 0.85rem;
  border: none;
  border-radius: 8px;
  background-color: #197a3a;
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

export const FooterText = styled.p`
  margin-top: 20px;
  color: #666;
  font-size: 1rem;
  text-align: center;
`;

export const ProfileUploadBtn = styled.button`
  overflow: hidden;
  position: relative;
  width: 170px;
  height: 170px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  background-color: #e9ecef;
  cursor: pointer;

  & > input {
    display: none;
  }
`;

export const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
