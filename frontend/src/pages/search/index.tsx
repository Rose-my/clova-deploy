import { useState } from "react";
import * as S from "./styles";
import NoticeText from "./components/NoticeText";
import Footer from "./components/Footer";
import InputFields from "./components/InputFields";
import Guide from "./components/Guide";

export default function index() {
  const [ifGuideClicked, setIfGuideClicked] = useState(false);
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [location, setLocation] = useState("");

  const handleGuidelineClick = () => {
    setIfGuideClicked(!ifGuideClicked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "date") setDate(value);
    if (name === "startHour") setStartHour(value);
    if (name === "endHour") setEndHour(value);
    if (name === "location") setLocation(value);
  };

  return (
    <S.Container>
      <InputFields
        date={date}
        startHour={startHour}
        endHour={endHour}
        location={location}
        handleInputChange={handleInputChange}
      />
      <Guide handleGuidelineClick={handleGuidelineClick} ifGuideClicked={ifGuideClicked} />
      {ifGuideClicked && <NoticeText />}
      <Footer />
    </S.Container>
  );
}
