import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as A from "./styles";
import { useState } from "react";
import { useGetAll } from "@hooks/useGetAll";
import { GetAllTypes } from "@api/getAll";
import { convertServerDate } from "@utils/dateFormat";
// import DUMMY_ITEMS from "@core/lostItemsData";

export default function index() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: LOST_ITEMS } = useGetAll();
  if (!LOST_ITEMS) {
    return <></>;
  }
  // [...DUMMY_ITEMS, ...LOST_ITEMS.data]
  return (
    <A.Container>
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
      <A.FullItems $isScrolled={isScrolled}>
        {LOST_ITEMS.data.map((item: GetAllTypes) => {
          const { lostid, image, title, category, lostdate, getwhere } = item;

          function moveToOne() {
            navigate("/found/one", {
              state: {
                lostid: lostid,
              },
            });
          }

          return (
            <A.Item type="button" key={lostid} onClick={moveToOne}>
              <A.Image
                src={image.startsWith("/media") ? `https://clova.pythonanywhere.com${image}` : image}
                alt={`Lost Item ${lostid}`}
              />
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
