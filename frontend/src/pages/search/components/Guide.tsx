import styled from "styled-components";
import { NoticeDownIc, NoticeUpIc } from "@assets/index";

interface Props {
  handleGuidelineClick: () => void;
  ifGuideClicked: boolean;
}

export default function Guide(props: Props) {
  const { handleGuidelineClick, ifGuideClicked } = props;

  return (
    <Container>
      <Guideline type="button" onClick={handleGuidelineClick}>
        검색 가이드라인
      </Guideline>
      {ifGuideClicked ? <NoticeDownIcon /> : <NoticeUpIcon />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 2rem;
`;

const Guideline = styled.button`
  ${({ theme }) => theme.fonts.Field};

  color: #8c8c8c;
  font-size: 1.4rem;
  font-weight: 400;

  &:hover {
    color: #495057;
  }
`;

const NoticeDownIcon = styled(NoticeDownIc)`
  width: 1.5rem;
  height: 1.5rem;
`;

const NoticeUpIcon = styled(NoticeUpIc)`
  width: 1.5rem;
  height: 1.5rem;
`;
