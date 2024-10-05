import Footer from "../components/Footer";
import Item from "../components/Item";
import { BtnWrapper } from "@styles/commonStyle";
import { useLocation, useNavigate } from "react-router-dom";
import * as O from "./styles";
import { useGetOne } from "@hooks/useGetOne";

export default function index() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lostid } = location.state;

  const { data: ONE } = useGetOne(lostid);

  if (!ONE) {
    return <></>;
  }

  return (
    <O.Container>
      <BtnWrapper type="button" onClick={() => navigate("/myupload/all")}>
        <O.BackIcon />
      </BtnWrapper>
      <O.Image src={`https://clova2024.pythonanywhere.com${ONE.data.image}`} alt="LostItem" />
      <Item
        category={ONE.data.category}
        lostdate={ONE.data.lostdate}
        losttime={ONE.data.losttime}
        description={ONE.data.description}
        title={ONE.data.title}
        moredesc={ONE.data.moredesc}
        founded={ONE.data.founded}
        getwhere={ONE.data.getwhere}
        nowwhere={ONE.data.nowwhere}
      />
      <Footer />
    </O.Container>
  );
}
