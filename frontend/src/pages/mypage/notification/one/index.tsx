import Footer from "@pages/mypage/components/Footer";
import Header from "../../components/SubHeader";
import * as N from "./styles";
import { convertServerDate } from "@utils/dateFormat";
import { useLocation } from "react-router-dom";
import { useGetNotiOne } from "@hooks/useGetNotiOne";

export default function index() {
  const location = useLocation();
  const { noticeid } = location.state;

  const { data: ONE } = useGetNotiOne(noticeid);

  if (!ONE) {
    return <></>;
  }

  return (
    <N.Container>
      <Header title="공지사항" url="/mypage/notification/all" />
      <N.Contents>
        <N.Wrapper>
          <N.Title>{ONE.data.title}</N.Title>
          <N.Date>{convertServerDate(ONE.data.noticeDate)}</N.Date>
        </N.Wrapper>
        <N.Text>{ONE.data.contents}</N.Text>
      </N.Contents>
      <Footer />
    </N.Container>
  );
}
