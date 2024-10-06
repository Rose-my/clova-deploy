import DUMMY_ITEMS from "@core/lostItemsData";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import * as A from "./styles";
import { useState } from "react";
import { GetAllTypes } from "@api/getAll";

export default function index() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <A.Container>
      <Header
        subtitle="검색 결과를 모두 보여드려요"
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
        url="/results/top"
      />
      <A.FullItems $isScrolled={isScrolled}>
        {DUMMY_ITEMS.map((item: GetAllTypes) => {
          const { lostid, image, getwhere, lostdate, category, title } = item;
          return (
            <A.Item type="button" key={lostid} onClick={() => navigate("/found/one")}>
              <A.Image src={image} alt={`Lost Item ${lostid}`} />
              <A.Details>
                <A.Title>{title}</A.Title>
                <A.Small>
                  <A.Found>{category}</A.Found>
                  <A.Found>{getwhere}</A.Found>
                  <Date>{lostdate}</Date>
                </A.Small>
                <A.Location>{getwhere}</A.Location>
              </A.Details>
            </A.Item>
          );
        })}
      </A.FullItems>
    </A.Container>
  );
}
