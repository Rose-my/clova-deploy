import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import * as M from "./styles";
import Title from "./components/Title";

export default function index() {
  const navigate = useNavigate();

  return (
    <M.Container>
      <Title />
      <M.ProfileSection>
        <M.ProfileIcon />
        <M.Contents>
          <M.Nickname>망고주스</M.Nickname>
          <M.Id>ewha.ac.kr</M.Id>
          <M.PointBox>
            <M.PointText>행운 포인트 점수</M.PointText>
            <M.Point>35</M.Point>
          </M.PointBox>
          <M.PointShopBox onClick={() => navigate("/mypage/point")}>
            <M.EwhaPointIcon />
            <M.EmartPointIcon />
          </M.PointShopBox>
        </M.Contents>
      </M.ProfileSection>
      <M.Menu>
        <M.MenuItem onClick={() => navigate("/myupload/all")}>
          <M.Button>등록 물품</M.Button>
          <M.MoveArrowIcon />
        </M.MenuItem>
        <M.MenuItem onClick={() => navigate("/mypage/keyword")}>
          <M.Button>키워드 알림 설정</M.Button>
          <M.MoveArrowIcon />
        </M.MenuItem>
        <M.MenuItem onClick={() => navigate("/mypage/notification")}>
          <M.Button>공지사항</M.Button>
          <M.MoveArrowIcon />
        </M.MenuItem>
      </M.Menu>
      <Footer />
    </M.Container>
  );
}
