import lostImg from "@assets/lost.png";

export interface LostItemsTypes {
  id: number;
  img: string;
  location: string;
  date: string;
}

const LOSTITEMS: LostItemsTypes[] = [
  {
    id: 1,
    img: lostImg,
    location: "library",
    date: "2024-04-03",
  },
  {
    id: 2,
    img: lostImg,
    location: "cafe",
    date: "2024-04-02",
  },
  {
    id: 3,
    img: lostImg,
    location: "3층 경비실",
    date: "2024-04-01",
  },
  {
    id: 4,
    img: lostImg,
    location: "v",
    date: "2024-04-01",
  },
  {
    id: 5,
    img: lostImg,
    location: "학생서비스센터",
    date: "2024-04-01",
  },
  {
    id: 6,
    img: lostImg,
    location: "3층 경비실",
    date: "2024-04-01",
  },
  {
    id: 7,
    img: lostImg,
    location: "학생서비스센터",
    date: "2024-04-01",
  },
];

export default LOSTITEMS;
