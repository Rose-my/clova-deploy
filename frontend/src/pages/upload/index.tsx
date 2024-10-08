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
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

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
      // Reset state before starting the mutation
      setIsUploading(true); // Set uploading state to true
      setImgDesc(null); // Reset imgDesc when a new image is uploaded

      postImageMutate(
        {
          image: lostImgUrl,
        },
        {
          onSuccess: (res: ImageRes) => {
            const { category, description, title, lostdate, losttime } = res;

            setImgDesc({ category, description, title, losttime, lostdate });
            setUploadError("");
            setIsUploading(false);
          },

          onError: () => {
            setUploadError("설명을 생성하지 못했어요. 다시 시도해주세요.");
            setIsUploading(false);
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
        <U.SubmitButton disabled={isUploading || !imgDesc} onClick={handlePicStatus}>
          {imgDesc ? "물건 설명보기" : "설명 생성중"}
        </U.SubmitButton>
      )}
      {uploadError !== "" && !isUploading && <U.ErrorText>{uploadError}</U.ErrorText>}
      {!picStatus && lostImgUrl && <InputField lostImgUrl={lostImgUrl} imgDesc={imgDesc} />}
    </U.Container>
  );
}
