import { useState } from "react";
import * as U from "../styles";
import styled from "styled-components";

interface Props {
  lostImgUrl: File;
  handleSubmit: () => void;
}

export default function InputField(props: Props) {
  const { lostImgUrl, handleSubmit } = props;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");
  const [location, setLocation] = useState("");
  const [storage, setStorage] = useState("");
  const [notes, setNotes] = useState("");

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
          <U.Input
            type="text"
            placeholder="물품을 습득한 장소를 입력해주세요."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </U.FormGroup>
        <U.FormGroup>
          <U.Label>보관 장소</U.Label>
          <U.Input
            type="text"
            placeholder="물품이 보관된 장소를 입력해주세요."
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />
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
