import { LOCATIONS, LocationsTypes } from "@core/locationData";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  location: string;
  modalDisplay: boolean;
  handleSelectLocation: (location: string) => void;
}

export default function FilteredLocModal(props: Props) {
  const { location, modalDisplay, handleSelectLocation } = props;

  const [filteredLocations, setFilteredLocations] = useState<LocationsTypes[]>();

  useEffect(() => {
    setFilteredLocations(
      LOCATIONS.filter((data: LocationsTypes) => data.loc.toLowerCase().includes(location.toLowerCase())),
    );
  }, [location]);

  return (
    <Locations $modalDisplay={modalDisplay}>
      {location &&
        filteredLocations &&
        filteredLocations.map((data, index) => {
          const { loc } = data;
          return (
            <LocationBox key={index} type="button" onClick={() => handleSelectLocation(loc)}>
              <Name>{loc}</Name>
            </LocationBox>
          );
        })}
    </Locations>
  );
}

const Locations = styled.div<{ $modalDisplay: boolean }>`
  display: ${({ $modalDisplay }) => ($modalDisplay ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 81%;
  z-index: 1000;
  width: 80%;
  max-height: 15rem;
  border-radius: 8px solid black;
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
  color: #818482;
  font-size: 1.5rem;
`;
