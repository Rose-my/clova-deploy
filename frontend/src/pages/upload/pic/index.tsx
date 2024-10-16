import styled from "styled-components";
import { useRef } from "react";
import { readImg } from "@utils/readImg";
import beforeUpload from "@assets/blankImg.png";

interface Props {
  isVerified: boolean;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
  setLostImgUrl: React.Dispatch<React.SetStateAction<File | undefined>>;
  uploadError: string;
  imgDesc: {
    category: string;
    description: string;
    title: string;
    losttime: string;
    lostdate: string;
  } | null;
}

export default function index(props: Props) {
  const { isVerified, setVerified, setLostImgUrl, uploadError, imgDesc } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const uploadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgObj = event.target.files;
    readImg({ input: imgObj, setUrl: setLostImgUrl, setVerified: setVerified });
  };

  return (
    <ImageUploadContainer>
      <ProfileUploadBtn type="button" onClick={() => inputRef.current?.click()}>
        <Profile src={beforeUpload} alt="profileImg" id="profileImg" />
        <input
          id="uploadButton"
          name="uploadButton"
          ref={inputRef}
          type="file"
          accept="image/*,image/gif,image/jpeg,image/png,image/jpg,image/webp,image/heic"
          onChange={uploadImg}
        />
      </ProfileUploadBtn>
      {!isVerified && <InstructionText $loading={false}>습득한 물건 이미지를 등록해주세요!</InstructionText>}
      {!isVerified && <InstructionText $loading={false}>c.lova(클로바)가 물건에 대해 설명해드릴게요.</InstructionText>}
      {isVerified && <InstructionText $loading={false}>c.lova(클로바)에게 물건 설명을 부탁했어요.</InstructionText>}
      <IsVerifiedBox>
        {isVerified &&
          uploadError === "" &&
          (imgDesc ? (
            <InstructionText $loading={true}>설명 생성 완료 !</InstructionText>
          ) : (
            <InstructionText $loading={true}>설명 생성 중 ...</InstructionText>
          ))}
      </IsVerifiedBox>
    </ImageUploadContainer>
  );
}

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 12rem 0 0;
`;

const ProfileUploadBtn = styled.button`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 1.8rem;
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

const InstructionText = styled.p<{ $loading: boolean }>`
  margin-top: 1rem;
  color: ${({ $loading }) => ($loading ? "#117b18" : "#555")};
  font-size: ${({ $loading }) => ($loading ? "1.5rem" : "1.2rem")};
  text-align: center;
`;

const IsVerifiedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  width: 100%;
`;
