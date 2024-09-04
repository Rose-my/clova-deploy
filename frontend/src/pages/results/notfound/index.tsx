import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@pages/search/components/Footer";
import * as N from "./styles";

export default function index() {
  const navigate = useNavigate();

  return (
    <N.Container>
      <Header title="검색결과" url="/search" />
      <N.Explanation>아쉽지만 검색결과가 없어요</N.Explanation>
      <N.Details>
        누군가 당신의 물건을 등록하면 빠르게 알려드릴게요!
        <br />
        키워드 알림 설정을 해보시겠어요?
      </N.Details>
      <N.Btn type="button" onClick={() => navigate("/mypage/keyword")}>
        키워드 알림 설정
      </N.Btn>
      <Footer />
    </N.Container>
  );
}
