import { useGetNoti } from "@hooks/useGetNoti";
import Footer from "../components/Footer";
import Header from "../components/SubHeader";
import * as N from "./styles";
import { GetNotiTypes } from "@api/getNoti";
import { convertServerDate } from "@utils/dateFormat";

export default function index() {
  const { data: NOTIES } = useGetNoti();
  if (!NOTIES) {
    return <></>;
  }

  return (
    <N.Container>
      <Header title="공지사항" url="/mypage" />
      <div>
        {NOTIES.data.map((item: GetNotiTypes) => {
          const { noticeDate, noticeId, title } = item;

          // function moveToOne() {
          //   navigate("/found/one", {
          //     state: {
          //       lostid: lostid,
          //     },
          //   });
          // }

          return (
            <button key={noticeId}>
              <p>{title}</p>
              <p>{convertServerDate(noticeDate)}</p>
            </button>
          );
        })}
      </div>
      <Footer />
    </N.Container>
  );
}
