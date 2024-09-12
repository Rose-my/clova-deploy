import Item from "../components/Item";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import * as O from "./styles";

export default function index() {
  const location = useLocation();
  const { lostImgUrl } = location.state as { lostImgUrl: File };

  return (
    <O.Container>
      <O.Image src={URL.createObjectURL(lostImgUrl)} alt="LostItem" />
      <Item />
      <Footer />
    </O.Container>
  );
}
