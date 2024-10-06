import { useState } from "react";
import DUMMY_ITEMS from "@core/lostItemsData";
import Header from "../components/Header";
import Footer from "@pages/search/components/Footer";
import ButtonGroup from "../components/ButtonGroup";
import * as T from "./styles";

export default function index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DUMMY_ITEMS.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DUMMY_ITEMS.length) % DUMMY_ITEMS.length);
  };

  return (
    <T.Container>
      <Header
        subtitle="가장 비슷한 상위 5개 결과를 보여드려요."
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
        url="/search"
      />
      <T.Pagination $isScrolled={isScrolled}>
        <T.ArrowButton onClick={prevItem}>
          <T.LeftArrowIcon />
        </T.ArrowButton>
        {DUMMY_ITEMS.map(
          (item, index) =>
            index === currentIndex && (
              <T.Item key={item.lostid}>
                <T.Image src={item.image} alt={`Lost Item ${item.lostid}`} />
                <T.Details>
                  <T.Label>습득 장소</T.Label>
                  <T.Location>{item.getwhere}</T.Location>
                </T.Details>
                <T.Details>
                  <T.Label>습득 일자</T.Label>
                  <Date>{item.lostdate}</Date>
                </T.Details>
                <T.Details>
                  <T.Label>보관 장소</T.Label>
                  <Date>{item.getwhere}</Date>
                </T.Details>
              </T.Item>
            ),
        )}
        <T.ArrowButton onClick={nextItem}>
          <T.RightArrowIcon />
        </T.ArrowButton>
      </T.Pagination>
      <ButtonGroup />
      <Footer />
    </T.Container>
  );
}
