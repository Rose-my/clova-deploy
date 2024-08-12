import styled from "styled-components";
import Search from "./Search";
import Found from "./Found";

export default function index() {
  return (
    <Container>
      <LocationTask>
        <Search />
        <Found />
      </LocationTask>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const LocationTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
