import { useState } from "react";
import * as S from "./styles";
import NoticeText from "./components/NoticeText";
import Footer from "./components/Footer";
import InputFields from "./components/InputFields";
import Guide from "./components/Guide";
import Header from "./components/Header";
import { usePostSearch } from "@hooks/usePostSearch";

export default function index() {
  const [ifGuideClicked, setIfGuideClicked] = useState(false);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const [modalDisplay, setModalDisplay] = useState(true);
  const [clickLoc, setClickLoc] = useState("");

  const { mutate: postSearchMutate } = usePostSearch();

  const handleGuidelineClick = () => {
    setIfGuideClicked(!ifGuideClicked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "description") setDescription(value);
    if (name === "date") setDate(value);
    if (name === "startHour") setStartHour(value);
    if (name === "endHour") setEndHour(value);
    if (name === "location") setLocation(value);
  };

  function handleClearBtn() {
    setModalDisplay(true);
    setLocation("");
  }

  function handleSelectLocation(locationName?: string) {
    if (locationName) {
      setLocation(locationName);
      setModalDisplay(false);
      setClickLoc(locationName);
    }
  }

  function handleLocModify() {
    setClickLoc("");
    setModalDisplay(true);
  }

  function handleSearch() {
    postSearchMutate({
      lostdate: date,
      losttime1: startHour,
      losttime2: endHour,
      getwhere: location,
      description: description,
    });
  }

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
        modalDisplay={modalDisplay}
        handleLocModify={handleLocModify}
        clickLoc={clickLoc}
        handleSearch={handleSearch}
        description={description}
      />
      <Guide handleGuidelineClick={handleGuidelineClick} ifGuideClicked={ifGuideClicked} />
      {ifGuideClicked && <NoticeText />}
      <Footer />
    </S.Container>
  );
}
