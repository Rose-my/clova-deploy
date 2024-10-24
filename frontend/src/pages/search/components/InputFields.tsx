import { PencilIc, GreenPencilIc } from "@assets/index";
import styled from "styled-components";
import FilteredLocModal from "./FilteredLocModal";

interface Props {
  date: string;
  startHour: string;
  endHour: string;
  location: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isScrolled: boolean;
  handleClearBtn: () => void;
  handleSelectLocation: (loc: string) => void;
  modalDisplay: boolean;
  clickLoc: string;
  handleLocModify: () => void;
  handleSearch: () => void;
  description: string;
}

export default function InputFields(props: Props) {
  const {
    date,
    startHour,
    endHour,
    location,
    handleInputChange,
    isScrolled,
    handleClearBtn,
    handleSelectLocation,
    modalDisplay,
    clickLoc,
    handleLocModify,
    handleSearch,
    description,
  } = props;

  return (
    <Container $isScrolled={isScrolled}>
      <WriteIcon $isScrolled={isScrolled} />
      <Title>
        찾고 싶은 물건에 대해 설명해주세요. <span>* 필수</span>
      </Title>
      <SearchField
        type="text"
        name="description"
        placeholder="초록색 스타벅스 텀블러"
        value={description}
        onChange={handleInputChange}
      />
      <Field>
        <Title>분실 시간</Title>
        <TimeContainer>
          <DateInput type="date" name="date" value={date} $hasValue={!!date} onChange={handleInputChange} />
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
        {clickLoc ? (
          <SearchResult>
            <Text>{location}</Text>
            <ModifyBtn onClick={handleLocModify}>
              <PencilIcon />
            </ModifyBtn>
          </SearchResult>
        ) : (
          <LocationContainer>
            <LocationInput
              type="text"
              name="location"
              value={location}
              placeholder="물건을 잃어버린 건물을 알려주세요"
              onChange={handleInputChange}
            />
            {location && <ClearBtn onClick={handleClearBtn}>X</ClearBtn>}
          </LocationContainer>
        )}
      </Field>
      <SearchBtn type="button" onClick={handleSearch} disabled={!description}>
        검색하기
      </SearchBtn>
      <FilteredLocModal modalDisplay={modalDisplay} location={location} handleSelectLocation={handleSelectLocation} />
    </Container>
  );
}

const Container = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  /* padding: 4rem 2rem 3rem; */
  padding: ${({ $isScrolled }) => ($isScrolled ? "14rem 2rem 3rem" : "10rem 2rem 3rem")};
  background-color: #f9f9f9;
`;

const WriteIcon = styled(GreenPencilIc)<{ $isScrolled: boolean }>`
  position: absolute;
  top: ${({ $isScrolled }) => ($isScrolled ? "19rem" : "15rem")};
  left: 4rem;
  width: 2rem;
  height: 2rem;
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
  font-family: WavvePADO-Regular;
  color: #3a3f3b;
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 140%;

  & > span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
  }
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
  position: relative;
`;

const DateInput = styled.input<{ $hasValue: boolean }>`
  width: auto;
  padding: 1.5rem 1.2rem;
  border: 2px solid #ced4da;
  border-radius: 10px;
  font-family: WavvePADO-Regular;
  color: ${({ $hasValue }) => ($hasValue ? "#000" : "#adb5bd")};
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: left;
  line-height: 140%; /* 25.2px */

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  @media (width <= 37.6rem) {
    width: 100%;
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
  border: 2px solid #ced4da;
  border-radius: 10px;
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
  border: 2px solid #ced4da;
  border-radius: 10px;
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

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  padding: 2px;
  border: none;
  background: none;
  color: #197a3a;
  font-size: 1.4rem;
  cursor: pointer;
  transform: translateY(-50%);

  &:hover {
    color: #0056b3;
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

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffe066;
  color: #333;
  font-size: 1.4rem;
`;

const ModifyBtn = styled.button`
  border: none;
  background: none;
  color: #007bff;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PencilIcon = styled(PencilIc)`
  width: 1.5rem;
  height: 1.5rem;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
`;
