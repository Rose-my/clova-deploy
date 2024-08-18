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
    location: "park",
    date: "2024-04-01",
  },
];

export default LOSTITEMS;
