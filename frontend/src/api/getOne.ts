import api from "./api";

export interface Response {
  message: string;
  data: GetOneTypes;
}

export interface GetOneTypes {
  lostid: number;
  image: string;
  lostdate: string;
  losttime: string;
  description: string;
  title: string;
  moredesc: string;
  founded: boolean;
  category: string;
  getwhere: string;
  nowwhere: string;
}

export async function getOne(lostid: number) {
  const { data } = await api.get<Response>(`/lostitem/${lostid}/`);
  return data;
}
