import { LOCATIONS, LocationTypes } from "@core/locationData";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PencilIc } from "assets";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<LocationTypes[]>();
  const [location, setLocation] = useState("");
  const [locationDisplay, setLocationDisplay] = useState(true);

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
    setLocation("");
    setLocationDisplay(true);
  }

  function handleClearBtn() {
    setSearchInput("");
  }

  return (
    <SearchContainer>
      <SearchBar>
        <Text>습득장소</Text>
        {location ? (
          <SearchResult>
            <Text>{location}</Text>
            <ModifyBtn onClick={handleModifyClick}>
              <PencilIcon />
            </ModifyBtn>
          </SearchResult>
        ) : (
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="물품을 습득한 장소를 입력해주세요."
              value={searchInput}
              onChange={(e: any) => {
                setSearchInput(e.target.value);
              }}
            />
            {searchInput && <ClearBtn onClick={handleClearBtn}>X</ClearBtn>}
          </SearchInputContainer>
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
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
`;

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 4px 12px rgb(0 123 255 / 20%);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  padding: 2px;
  border: none;
  background: none;
  color: #007bff;
  font-size: 1.4rem;
  cursor: pointer;
  transform: translateY(-50%);

  &:hover {
    color: #0056b3;
  }
`;

const Locations = styled.div<{ $locationDisplay: boolean }>`
  display: ${({ $locationDisplay }) => ($locationDisplay ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 80px;
  z-index: 1000;
  max-height: 15rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
  overflow-y: auto;
`;

const LocationBox = styled.button`
  display: flex;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f8f9fa;
  }

  &:active {
    background-color: #e9ecef;
  }
`;

const Name = styled.p`
  color: #333;
  font-size: 1rem;
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #ffe066;
  color: #333;
  font-size: 1rem;
`;

const ModifyBtn = styled.button`
  border: none;
  background: none;
  color: #007bff;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PencilIcon = styled(PencilIc)`
  width: 1.5rem;
  height: 1.5rem;
`;
