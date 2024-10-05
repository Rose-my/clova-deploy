import { useGetNoti } from "@hooks/useGetNoti";
import Footer from "../../components/Footer";
import Header from "../../components/SubHeader";
import * as N from "./styles";
import { GetNotiTypes } from "@api/getNoti";
import { convertServerDate } from "@utils/dateFormat";
import { useNavigate } from "react-router-dom";

export default function index() {
  const { data: NOTIES } = useGetNoti();
  const navigate = useNavigate();

  if (!NOTIES) {
    return <></>;
  }

  return (
    <N.Container>
      <Header title="공지사항" url="/mypage" />
      <N.Contents>
        {NOTIES.data.map((item: GetNotiTypes) => {
          const { noticeDate, noticeid, title } = item;

          function moveToOne() {
            navigate("/mypage/notification/one", {
              state: {
                noticeid: noticeid,
              },
            });
          }

          return (
            <N.SubDetail type="button" key={noticeid} onClick={moveToOne}>
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
