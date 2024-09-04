import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { readImg } from "@utils/readImg";
import beforeUpload from "@assets/blankImg.png";
import Header from "./components/Header";
import * as U from "./styles";

export default function Index() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");
  const [location, setLocation] = useState("");
  const [storage, setStorage] = useState("");
  const [notes, setNotes] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [lostImgUrl, setLostImgUrl] = useState<File>();
  const [, isVerified] = useState(true);

  const uploadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgObj = event.target.files;
    readImg({ input: imgObj, setUrl: setLostImgUrl, setVerified: isVerified });
  };

  const handleSubmit = () => {
    navigate("/myupload/one", {
      state: { lostImgUrl: lostImgUrl },
    });
  };

  return (
    <U.Container>
      <Header title="습득물 등록" url="/search" />
      <U.ImageUploadContainer>
        <U.ProfileUploadBtn type="button" onClick={() => inputRef.current?.click()}>
          <U.Profile src={beforeUpload} alt="profileImg" id="profileImg" />
          <input
            id="uploadButton"
            name="uploadButton"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={uploadImg}
          />
        </U.ProfileUploadBtn>
        <U.InstructionText>습득한 물건 이미지를 등록해주세요!</U.InstructionText>
        <U.InstructionText>c.lova가 물건에 대해 설명해드릴게요.</U.InstructionText>
      </U.ImageUploadContainer>

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
    </U.Container>
  );
}
