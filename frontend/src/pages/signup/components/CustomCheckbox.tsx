import { CheckIc, UncheckIc } from "@assets/index";
import styled from "styled-components";

interface Props {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const CustomCheckbox = ({ checked, onChange, label }: Props) => {
  return (
    <CheckboxContainer onClick={onChange}>
      {checked ? <CheckIc /> : <UncheckIc />}
      <LabelText>{label}</LabelText>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const LabelText = styled.span`
  margin-left: 0.5rem;
  color: #161616b4;
  font-size: 1.2rem;
`;

export default CustomCheckbox;
