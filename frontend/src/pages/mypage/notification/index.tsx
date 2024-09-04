import Footer from "../components/Footer";
import Header from "../components/Header";
import * as N from "./styles";

export default function index() {
  return (
    <N.Container>
      <Header title="공지사항" url="/mypage" />
      <N.NoNotiMessage>등록된 공지사항이 없습니다.</N.NoNotiMessage>
      <Footer />
    </N.Container>
  );
}
