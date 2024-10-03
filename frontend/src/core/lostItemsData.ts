import { GetAllTypes } from "@api/getAll";
import book from "@assets/book.png";
import airpod from "@assets/airpod.png";
import greenum from "@assets/greenum.png";
import purse from "@assets/purse.png";
import starbucks from "@assets/starbucks.png";
import glass from "@assets/glass.png";

const DUMMY_ITEMS: GetAllTypes[] = [
  {
    lostid: 0.1,
    image: starbucks,
    getwhere: "신세계관",
    lostdate: "2024.10.03",
    category: "텀블러",
    title: "스타벅스 텀블러",
  },
  {
    lostid: 0.2,
    image: greenum,
    getwhere: "체육관 강의실",
    lostdate: "2024.10.02",
    category: "우산",
    title: "초록 우산",
  },
  {
    lostid: 0.3,
    image: airpod,
    getwhere: "아산공학관",
    lostdate: "2024.10.01",
    category: "이어폰/헤드셋",
    title: "에어팟",
  },
  {
    lostid: 0.4,
    image: glass,
    getwhere: "학생서비스센터",
    lostdate: "2024.10.01",
    category: "패션/악세서리/인형/화장품",
    title: "안경",
  },
  {
    lostid: 0.5,
    image: book,
    getwhere: "아산공학관",
    lostdate: "2024.10.01",
    category: "서적/문구류",
    title: "영어서적",
  },
  {
    lostid: 0.6,
    image: purse,
    getwhere: "학생서비스센터",
    lostdate: "2024.10.01",
    category: "지갑",
    title: "보테가 지갑",
  },
];

export default DUMMY_ITEMS;
