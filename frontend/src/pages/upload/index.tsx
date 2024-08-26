import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { readImg } from "@utils/readImg";
import beforeUpload from "@assets/blankImg.png";
import Header from "./components/Header";

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
    navigate("/upload/one", {
      state: { lostImgUrl: lostImgUrl },
    });
  };

  return (
    <Container>
      <Header title="습득물 등록" url="/search" />
      <ImageUploadContainer>
        <ProfileUploadBtn type="button" onClick={() => inputRef.current?.click()}>
          <Profile src={beforeUpload} alt="profileImg" id="profileImg" />
          <input
            id="uploadButton"
            name="uploadButton"
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={uploadImg}
          />
        </ProfileUploadBtn>
        <InstructionText>습득한 물건 이미지를 등록해주세요!</InstructionText>
        <InstructionText>c.lova가 물건에 대해 설명해드릴게요.</InstructionText>
      </ImageUploadContainer>

      <Form>
        <NotiText>아래 항목들은 클릭하여 수정이 가능합니다.</NotiText>
        <FormGroup>
          <Label>습득 일자</Label>
          <Input
            type="text"
            placeholder="물품을 습득한 일자입니다."
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>습득 시간</Label>
          <Input
            type="text"
            placeholder="물품을 습득한 시간입니다."
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>카테고리</Label>
          <Input
            type="text"
            placeholder="물품의 정보 카테고리입니다."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>물건 특징</Label>
          <Input
            type="text"
            placeholder="물품의 특징입니다."
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </FormGroup>
        <Divider />
        <NotiText>아래 필수 항목들을 입력란에 기재해주세요.</NotiText>
        <FormGroup>
          <Label>습득 장소</Label>
          <Input
            type="text"
            placeholder="물품을 습득한 장소를 입력해주세요."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>보관 장소</Label>
          <Input
            type="text"
            placeholder="물품이 보관된 장소를 입력해주세요."
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />
        </FormGroup>
        <Divider />
        <OptionText>아래 선택 항목들을 입력란에 기재해주세요.</OptionText>
        <FormGroup>
          <Label>전달 사항</Label>
          <Input
            type="text"
            placeholder="추가적인 전달사항이 있다면 입력해주세요."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormGroup>
      </Form>
      <SubmitButton onClick={handleSubmit}>등록 하기</SubmitButton>
      <FooterText>누군가의 잃어버린 물건을 등록해주셔서 감사합니다.</FooterText>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100dvh;
  padding: 2rem;
  background-color: white;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const InstructionText = styled.p`
  margin-top: 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

const NotiText = styled.p`
  padding: 0.8rem 0 1rem;
  color: red;
  font-size: 1.2rem;
  text-align: center;
`;

const OptionText = styled.p`
  padding: 0.8rem 0 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

const Form = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Input = styled.input`
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

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const SubmitButton = styled.button`
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

const FooterText = styled.p`
  margin-top: 20px;
  color: #666;
  font-size: 1rem;
  text-align: center;
`;

const ProfileUploadBtn = styled.button`
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

const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
