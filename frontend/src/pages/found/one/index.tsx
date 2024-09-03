import BigImg from "@assets/lost.png";
import Footer from "../components/Footer";
import Item from "../components/Item";
import { BtnWrapper } from "@styles/commonStyle";
import { useNavigate } from "react-router-dom";
import * as O from "./styles";

export default function index() {
  const navigate = useNavigate();

  return (
    <O.Container>
      <BtnWrapper type="button" onClick={() => navigate("/found/all")}>
        <O.BackIcon />
      </BtnWrapper>
      <O.Image src={BigImg} alt="LostItem" />
      <Item />
      <Footer />
    </O.Container>
  );
}
