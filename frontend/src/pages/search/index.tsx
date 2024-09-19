import { useState } from "react";
import * as S from "./styles";
import NoticeText from "./components/NoticeText";
import Footer from "./components/Footer";
import InputFields from "./components/InputFields";
import Guide from "./components/Guide";
import Header from "./components/Header";

export default function index() {
  const [ifGuideClicked, setIfGuideClicked] = useState(false);
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [locationDisplay, setLocationDisplay] = useState(true);

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

  function handleClearBtn() {
    setLocation("");
  }

  function handleSelectLocation(locationName?: string) {
    if (locationName) {
      setLocation(locationName);
      setLocationDisplay(false);
    }
  }

  console.log(location);

  return (
    <S.Container>
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
      <InputFields
        date={date}
        startHour={startHour}
        endHour={endHour}
        location={location}
        handleInputChange={handleInputChange}
        isScrolled={isScrolled}
        handleClearBtn={handleClearBtn}
        handleSelectLocation={handleSelectLocation}
        locationDisplay={locationDisplay}
      />
      <Guide handleGuidelineClick={handleGuidelineClick} ifGuideClicked={ifGuideClicked} />
      {ifGuideClicked && <NoticeText />}
      <Footer />
    </S.Container>
  );
}
