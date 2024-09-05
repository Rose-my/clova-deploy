import LOSTITEMS from "@core/lostItemsData";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as A from "./styles";
import { useState } from "react";

export default function index() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <A.Container>
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
      <A.FullItems $isScrolled={isScrolled}>
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
