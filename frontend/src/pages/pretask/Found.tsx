import { LOCATIONS, LocationTypes } from "@core/locationData";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Found() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<LocationTypes[]>();
  const [location, setLocation] = useState("");
  const [locationDisplay, setLocationDisplay] = useState(true);

  /* 검색*/
  useEffect(() => {
    setFilteredLocations(
      LOCATIONS.filter((location) => location.location.toLowerCase().includes(searchInput.toLowerCase())),
    );
  }, [searchInput]);

  function handleSelectLocation(locationName?: string) {
    if (locationName) {
      setLocation(locationName);
      setSearchInput(locationName);
      setLocationDisplay(false);
    }
  }

  function handleModifyClick() {
    // Clear the selected location to allow re-selection
    setLocation("");
    setLocationDisplay(true);
  }

  function handleClearBtn() {
    setSearchInput("");
  }

  return (
    <>
      <SearchBar>
        <Text>보관장소</Text>
        {location ? (
          <SearchResult>
            <Text>{location}</Text>
            <ModifyBtn onClick={handleModifyClick}>수정</ModifyBtn>
          </SearchResult>
        ) : (
          <div>
            <SearchInput
              type="text"
              placeholder="물품이 보관된 장소를 입력해주세요."
              value={searchInput}
              onChange={(e: any) => {
                setSearchInput(e.target.value);
              }}
            />
            {searchInput && <ClearBtn onClick={handleClearBtn}>X</ClearBtn>}
          </div>
        )}
      </SearchBar>
      <Locations $locationDisplay={locationDisplay}>
        {searchInput &&
          filteredLocations &&
          filteredLocations.map((data, index) => {
            const { location } = data;
            return (
              <LocationBox key={index} type="button" onClick={() => handleSelectLocation(location)}>
                <Name>{location}</Name>
              </LocationBox>
            );
          })}
      </Locations>
    </>
  );
}

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  width: 100%;
`;

const Text = styled.p`
  color: black;
  text-align: left;
`;

const Locations = styled.div<{ $locationDisplay: boolean }>`
  display: ${({ $locationDisplay }) => ($locationDisplay ? "flex" : "none")};
  flex-direction: column;
  position: absolute;

  /* top: calc(100% + 0.5rem); */
  left: 80px;
  z-index: 1000; /* Ensure it's above other content */

  /* width: 100%; */
  max-height: 15rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  overflow-y: auto;
`;

const LocationBox = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  padding: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: lightpink;
  }
`;

const Name = styled.p`
  color: black;
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 46px;
  background-color: palegoldenrod;
  color: black;
  text-align: left;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 3.8rem;
  padding: 0 1rem;
  border: none;
  border-radius: 46px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: gray;
  }
`;

const ModifyBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: blue;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

const ClearBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: blue;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
