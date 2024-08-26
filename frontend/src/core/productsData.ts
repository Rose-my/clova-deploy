import RamenImg from "@assets/ramen.png";

export interface ProductsTypes {
  store: string;
  image: string;
  name: string;
  points: number;
}

const PRODUCTS: ProductsTypes[] = [
  {
    store: "이화상점",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
  {
    store: "이화상점",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
  {
    store: "이마트24",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
  {
    store: "이마트24",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
  {
    store: "이마트24",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
  {
    store: "이마트24",
    image: RamenImg,
    name: "농심 신라면 컵 65g",
    points: 10,
  },
];

export default PRODUCTS;
