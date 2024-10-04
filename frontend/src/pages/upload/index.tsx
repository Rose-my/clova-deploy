import Header from "./components/Header";
import * as U from "./styles";
import Pic from "./pic";
import InputField from "./components/InputField";
import { useEffect, useState } from "react";
import { usePostImage } from "@hooks/usePostImage";
import { ImageRes } from "types/types";

export default function index() {
  const [isVerified, setVerified] = useState(false);
  const [lostImgUrl, setLostImgUrl] = useState<File>();
  const [picStatus, setPicStatus] = useState(true);
  const [imgDesc, setImgDesc] = useState<{
    category: string;
    description: string;
    title: string;
    losttime: string;
    lostdate: string;
  } | null>(null);

  const { mutate: postImageMutate } = usePostImage();

  useEffect(() => {
    if (isVerified && lostImgUrl) {
      postImageMutate(
        {
          image: lostImgUrl,
        },
        {
          onSuccess: (res: ImageRes) => {
            const { category, description, title, lostdate, losttime } = res;

            setImgDesc({ category, description, title, losttime, lostdate });
          },
        },
      );
    }
  }, [isVerified, lostImgUrl]);

  const handlePicStatus = () => {
    setPicStatus(false);
  };

  return (
    <U.Container>
      <Header title="습득물 등록" url="/search" />
      {picStatus && <Pic isVerified={isVerified} setVerified={setVerified} setLostImgUrl={setLostImgUrl} />}
      {picStatus && isVerified && (
        <U.SubmitButton disabled={!imgDesc} onClick={handlePicStatus}>
          {imgDesc ? "물건 설명보기" : "설명 생성중"}
        </U.SubmitButton>
      )}
      {!picStatus && lostImgUrl && <InputField lostImgUrl={lostImgUrl} imgDesc={imgDesc} />}
    </U.Container>
  );
}
