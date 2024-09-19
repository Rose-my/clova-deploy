import { useState } from "react";
import { PencilIc } from "@assets/index";
import * as U from "../styles";
import styled from "styled-components";
import FilteredModal from "./FilteredModal";

interface Props {
  lostImgUrl: File;
  handleSubmit: () => void;
}

export default function InputField(props: Props) {
  const { lostImgUrl, handleSubmit } = props;
  const [locModalDisplay, setLocModalDisplay] = useState(true);
  const [strgModalDisplay, setStrgModalDisplay] = useState(true);
  const [clickLoc, setClickLoc] = useState("");
  const [clickStrg, setClickStrg] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");
  const [location, setLocation] = useState("");
  const [storage, setStorage] = useState("");
  const [notes, setNotes] = useState("");

  function handleClearLocationBtn() {
    setLocation("");
    setLocModalDisplay(true);
  }

  function handleClearStorageBtn() {
    setStorage("");
    setStrgModalDisplay(true);
  }

  function handleSelectLocation(locationName?: string) {
    if (locationName) {
      setLocation(locationName);
      setClickLoc(locationName);
      setLocModalDisplay(false);
    }
  }

  function handleSelectStrg(storageName?: string) {
    if (storageName) {
      setStorage(storageName);
      setClickStrg(storageName);
      setStrgModalDisplay(false);
    }
  }

  function handleLocModify() {
    setClickLoc("");
    setLocModalDisplay(true);
  }

  function handleStrgModify() {
    setClickStrg("");
    setStrgModalDisplay(true);
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={URL.createObjectURL(lostImgUrl)} alt="profileImg" id="profileImg" />
      </ImageWrapper>
      <U.Form>
        <U.NotiText>아래 항목들은 클릭하여 수정이 가능합니다.</U.NotiText>
        <U.FormGroup>
          <U.Label>습득 일자</U.Label>
          <U.Input
            type="text"
            placeholder="물품을 습득한 일자입니다."
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </U.FormGroup>
        <U.FormGroup>
          <U.Label>습득 시간</U.Label>
          <U.Input
            type="text"
            placeholder="물품을 습득한 시간입니다."
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </U.FormGroup>
        <U.FormGroup>
          <U.Label>카테고리</U.Label>
          <U.Input
            type="text"
            placeholder="물품의 정보 카테고리입니다."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </U.FormGroup>
        <U.FormGroup>
          <U.Label>물건 특징</U.Label>
          <U.Input
            type="text"
            placeholder="물품의 특징입니다."
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </U.FormGroup>
        <U.Divider />
        <U.NotiText>아래 필수 항목들을 입력란에 기재해주세요.</U.NotiText>
        <U.FormGroup>
          <U.Label>습득 장소</U.Label>
          {clickLoc ? (
            <SearchResult>
              <Text>{location}</Text>
              <ModifyBtn onClick={handleLocModify}>
                <PencilIcon />
              </ModifyBtn>
            </SearchResult>
          ) : (
            <>
              <U.Input
                type="text"
                placeholder="물품을 습득한 장소를 입력해주세요."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {location && <ClearBtn onClick={handleClearLocationBtn}>X</ClearBtn>}
            </>
          )}
          <FilteredModal input={location} modalDisplay={locModalDisplay} handleSelection={handleSelectLocation} />
        </U.FormGroup>
        <U.FormGroup>
          <U.Label>보관 장소</U.Label>
          {clickStrg ? (
            <SearchResult>
              <Text>{storage}</Text>
              <ModifyBtn onClick={handleStrgModify}>
                <PencilIcon />
              </ModifyBtn>
            </SearchResult>
          ) : (
            <>
              <U.Input
                type="text"
                placeholder="물품이 보관된 장소를 입력해주세요."
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
              />
              {storage && <ClearBtn onClick={handleClearStorageBtn}>X</ClearBtn>}
            </>
          )}
          <FilteredModal input={storage} modalDisplay={strgModalDisplay} handleSelection={handleSelectStrg} />
        </U.FormGroup>
        <U.Divider />
        <U.OptionText>아래 선택 항목들을 입력란에 기재해주세요.</U.OptionText>
        <U.FormGroup>
          <U.Label>전달 사항</U.Label>
          <U.Input
            type="text"
            placeholder="추가적인 전달사항이 있다면 입력해주세요."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </U.FormGroup>
      </U.Form>
      <U.SubmitButton onClick={handleSubmit}>등록 하기</U.SubmitButton>
      <U.FooterText>누군가의 잃어버린 물건을 등록해주셔서 감사합니다.</U.FooterText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10rem 0 4rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1.6rem;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 60%;
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
