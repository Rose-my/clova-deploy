import api from "./api";

export interface Response {
  message: string;
  data: GetShopTypes[];
}

export interface GetShopTypes {
  stuffid: number;
  stuff: string;
  price: number;
  soldout: boolean;
}

export async function getShop() {
  const { data } = await api.get<Response>(`/informations/pointshop/`);
  return data;
}
