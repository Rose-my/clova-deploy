import LOSTITEMS from "@core/lostItemsData";
import { useNavigate } from "react-router-dom";
import Footer from "@pages/mypage/components/Footer";
import * as A from "./styles";
import SubHeader from "@pages/mypage/components/SubHeader";

export default function index() {
  const navigate = useNavigate();

  return (
    <A.Container>
      <SubHeader title="등록 물품" url="/mypage" />
      <A.FullItems>
        {LOSTITEMS.map((item) => (
          <A.Item type="button" key={item.id} onClick={() => navigate("/found/one")}>
            <A.Image src={item.img} alt={`Lost Item ${item.id}`} />
            <A.Details>
              <A.Title>에어팟 프로</A.Title>
              <A.Small>
                <A.Found>{item.location}</A.Found>
                <Date>{item.date}</Date>
              </A.Small>
              <A.Location>{item.location}</A.Location>
            </A.Details>
          </A.Item>
        ))}
      </A.FullItems>
      <A.BtnWrapper type="button" onClick={() => navigate("/upload")}>
        <A.PlusIcon />
      </A.BtnWrapper>
      <Footer />
    </A.Container>
  );
}
