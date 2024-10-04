import { useNavigate } from "react-router-dom";
import Footer from "@pages/mypage/components/Footer";
import * as A from "./styles";
import SubHeader from "@pages/mypage/components/SubHeader";
import { useGetMyupload } from "@hooks/useGetMyupload";
import { GetMyupload } from "@api/getMyupload";
import { convertServerDate } from "@utils/dateFormat";

export default function index() {
  const navigate = useNavigate();

  const { data: UPLOAD_ITEMS } = useGetMyupload();

  if (!UPLOAD_ITEMS) {
    return <></>;
  }

  return (
    <A.Container>
      <SubHeader title="등록 물품" url="/mypage" />
      <A.FullItems>
        {UPLOAD_ITEMS.data.map((item: GetMyupload) => {
          const { lostid, image, title, category, getwhere, lostdate } = item;

          return (
            <A.Item type="button" key={lostid} onClick={() => navigate("/myupload/one")}>
              <A.Image src={`https://clova2024.pythonanywhere.com${image}`} alt={`Lost Item ${lostid}`} />
              <A.Details>
                <A.Title>{title}</A.Title>
                <A.Small>
                  <A.Found>{category}</A.Found>
                  <A.Date>{convertServerDate(lostdate)}</A.Date>
                </A.Small>
                <A.Location>{getwhere}</A.Location>
              </A.Details>
            </A.Item>
          );
        })}
      </A.FullItems>
      <A.BtnWrapper type="button" onClick={() => navigate("/upload")}>
        <A.PlusIcon />
      </A.BtnWrapper>
      <Footer />
    </A.Container>
  );
}
