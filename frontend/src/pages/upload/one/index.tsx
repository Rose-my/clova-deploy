import Item from "@pages/myupload/components/Item";
import { useLocation } from "react-router-dom";
import Footer from "@pages/myupload/components/Footer";
import * as O from "./styles";

export default function index() {
  const location = useLocation();
  const { lostImgUrl } = location.state as { lostImgUrl: File };
  const { losttime, lostdate, description, title, moredesc, founded, category, getwhere, nowwhere } = location.state;
  return (
    <O.Container>
      <O.Image src={URL.createObjectURL(lostImgUrl)} alt="LostItem" />
      <Item
        lostdate={lostdate}
        losttime={losttime}
        description={description}
        title={title}
        moredesc={moredesc}
        founded={founded}
        getwhere={getwhere}
        nowwhere={nowwhere}
        category={category}
      />
      <Footer />
    </O.Container>
  );
}
