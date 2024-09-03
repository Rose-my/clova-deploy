import Item from "../components/Item";
import { BtnWrapper } from "@styles/commonStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import * as O from "./styles";

export default function index() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lostImgUrl } = location.state as { lostImgUrl: File };

  return (
    <O.Container>
      <BtnWrapper type="button" onClick={() => navigate("/mypage/upload")}>
        <O.BackIcon />
      </BtnWrapper>
      <O.Image src={URL.createObjectURL(lostImgUrl)} alt="LostItem" />
      <Item />
      <Footer />
    </O.Container>
  );
}
