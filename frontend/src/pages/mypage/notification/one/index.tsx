import { useGetNoti } from "@hooks/useGetNoti";
import Footer from "@pages/mypage/components/Footer";
import Header from "../../components/SubHeader";
import * as N from "./styles";
import { GetNotiTypes } from "@api/getNoti";
import { convertServerDate } from "@utils/dateFormat";
import { useLocation } from "react-router-dom";

export default function index() {
  const location = useLocation();
  const { lostid } = location.state;

  const { data: ONE } = useGetOne(lostid);

  if (!ONE) {
    return <></>;
  }

  return (
    <N.Container>
      <Header title="공지사항" url="/mypage" />
      <N.Contents>
        {NOTIES.data.map((item: GetNotiTypes) => {
          const { noticeDate, noticeid, title } = item;

          return (
            <N.SubDetail type="button" key={noticeid}>
              <N.Wrapper>
                <N.Title>{title}</N.Title>
                <N.Date>{convertServerDate(noticeDate)}</N.Date>
              </N.Wrapper>
            </N.SubDetail>
          );
        })}
      </N.Contents>
      <Footer />
    </N.Container>
  );
}
