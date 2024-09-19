import { SearchIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  date: string;
  startHour: string;
  endHour: string;
  location: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isScrolled: boolean;
}

export default function InputFields(props: Props) {
  const { date, startHour, endHour, location, handleInputChange, isScrolled } = props;
  const navigate = useNavigate();

  const isFormValid = date && startHour && endHour && location;

  const handleSearchClick = () => {
    navigate("/results/top");
  };

  return (
    <Container $isScrolled={isScrolled}>
      <SearchIcon $isScrolled={isScrolled} />
      <SearchField type="text" placeholder="찾고 싶은 물건에 대해 설명해주세요." />
      <Field>
        <Title>분실 시간</Title>
        <TimeContainer>
          <DateInput type="text" name="date" placeholder="2024-08-08" value={date} onChange={handleInputChange} />
          <TimeInputBox>
            <TimeInput
              type="text"
              name="startHour"
              value={startHour}
              placeholder="14"
              onChange={handleInputChange}
              maxLength={2}
            />
            <TimeText>시 부터</TimeText>
            <TimeInput
              type="text"
              name="endHour"
              value={endHour}
              placeholder="21"
              onChange={handleInputChange}
              maxLength={2}
            />
            <TimeText>시 사이</TimeText>
          </TimeInputBox>
        </TimeContainer>
      </Field>
      <Field>
        <Title>분실 장소</Title>
        <LocationContainer>
          <LocationInput
            type="text"
            name="location"
            value={location}
            placeholder="물건을 잃어버린 건물을 알려주세요"
            onChange={handleInputChange}
          />
        </LocationContainer>
      </Field>
      <SearchBtn type="button" onClick={handleSearchClick} disabled={!isFormValid}>
        검색하기
      </SearchBtn>
    </Container>
  );
}

const Container = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  /* padding: 4rem 2rem 3rem; */
  padding: ${({ $isScrolled }) => ($isScrolled ? "12rem 2rem 3rem" : "8rem 2rem 3rem")};
  background-color: #f9f9f9;
`;

const SearchIcon = styled(SearchIc)<{ $isScrolled: boolean }>`
  position: absolute;
  top: ${({ $isScrolled }) => ($isScrolled ? "14rem" : "10rem")};
  left: 4rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const SearchField = styled.input`
  padding: 2.2rem 3rem 2.2rem 5rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  font-size: 1.5rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Field};

  font-size: 1.4rem;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (width <= 37.6rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LocationContainer = styled.div`
  display: flex;
`;

const DateInput = styled.input`
  width: auto;
  padding: 1.5rem 0 1.2rem 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1.4rem;
  text-align: left;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (width <= 37.6rem) {
    width: 80%;
  }
`;

const TimeInputBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 4rem;
  padding: 1.5rem 0 1.2rem 0.8rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1.4rem;
  text-align: left;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (width <= 37.6rem) {
    width: 15%;
  }
`;

const TimeText = styled.span`
  color: #495057;
  font-size: 1rem;
`;

const LocationInput = styled.input`
  width: 100%;
  padding: 1.5rem 0 1.2rem 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1.4rem;
  text-align: left;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const SearchBtn = styled.button`
  margin-top: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #197a3a;
  color: white;
  font-size: 1.5rem;
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

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
