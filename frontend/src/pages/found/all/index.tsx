import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as A from "./styles";
import { useState } from "react";
import { useGetAll } from "@hooks/useGetAll";
import { GetAllTypes } from "@api/getAll";
import { convertServerDate } from "@utils/dateFormat";
import DUMMY_ITEMS from "@core/lostItemsData";

export default function index() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: LOST_ITEMS } = useGetAll();
  if (!LOST_ITEMS) {
    return <></>;
  }
  console.log(LOST_ITEMS?.data);

  return (
    <A.Container>
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
      <A.FullItems $isScrolled={isScrolled}>
        {[...DUMMY_ITEMS, ...LOST_ITEMS.data].map((item: GetAllTypes) => (
          <A.Item type="button" key={item.lostid} onClick={() => navigate("/found/one")}>
            <A.Image
              src={item.image.startsWith("/media") ? `https://clova.pythonanywhere.com${item.image}` : item.image}
              alt={`Lost Item ${item.lostid}`}
            />
            <A.Details>
              <A.Title>{item.title}</A.Title>
              <A.Small>
                <A.Found>{item.category}</A.Found>
                <A.Date>{convertServerDate(item.lostdate)}</A.Date>
              </A.Small>
              <A.Location>{item.getwhere}</A.Location>
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
