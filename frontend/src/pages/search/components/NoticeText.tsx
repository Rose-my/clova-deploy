import styled from "styled-components";

export default function NoticeText() {
  return (
    <Text>
      찾으시려는 분실물에 대한 정보를 최대한 자세히 적어주세요. <br />
      물건의 색깔, 브랜드, 텍스트 등 적어주신 가시적인 특징을 기반으로 유저의 물건일 가능성이 높은 분실물 검색 결과를
      제공합니다. <br />
      <br />
      예) 초록색 스타벅스 텀블러, 핑크색 털 재질의 필통
      <br /> <br />
      ----------------------------------------
      <br />
      1. 분실 시간
      <br />
      물건을 분실한 것으로 예상되는 시간대를 선택해주세요. 선택하지 않을 경우 현재 시간대로 자동설정됩니다.
      <br />
      <br />
      2.분실 장소
      <br />
      물건을 분실한 것으로 예상되는 장소를 선택해주세요. 선택하지 않을 경우 전체 장소를 대상으로 잃어버린 물건을
      검색합니다.
      <br /> <br />
      *분실 시간과 분실 장소를 입력하지 않을 경우, 전체 시간대와 장소를 대상으로 잃어버린 물건을 검색하기에 시간이 더
      소요될 수 있습니다.
    </Text>
  );
}

const Text = styled.span`
  display: block;
  justify-content: flex-start;
  margin-top: 1rem;
  padding: 0 2rem 1.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.fonts.Field};

  overflow-y: scroll;
`;
