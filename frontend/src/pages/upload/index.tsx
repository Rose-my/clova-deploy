import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import * as U from "./styles";
import Pic from "./pic";
import InputField from "./components/InputField";
import { useState } from "react";

export default function index() {
  const navigate = useNavigate();
  const [isVerified, setVerified] = useState(false);
  const [lostImgUrl, setLostImgUrl] = useState<File>();
  const [picStatus, setPicStatus] = useState(true);

  const handleSubmit = () => {
    navigate("/myupload/one", {
      state: { lostImgUrl: lostImgUrl },
    });
  };

  const handlePicStatus = () => {
    setPicStatus(false);
  };

  return (
    <U.Container>
      <Header title="습득물 등록" url="/search" />
      {picStatus && <Pic isVerified={isVerified} setVerified={setVerified} setLostImgUrl={setLostImgUrl} />}
      {picStatus && isVerified && <U.SubmitButton onClick={handlePicStatus}>물건 설명보기</U.SubmitButton>}
      {!picStatus && lostImgUrl && <InputField lostImgUrl={lostImgUrl} handleSubmit={handleSubmit} />}
    </U.Container>
  );
}
