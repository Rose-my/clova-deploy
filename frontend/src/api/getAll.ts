import api from "./api";

export interface Response {
  message: string;
  data: GetAllTypes[];
}

export interface GetAllTypes {
  lostid: number;
  image: string;
  title: string;
  category: string;
  getwhere: string;
  lostdate: string;
}

export async function getAll() {
  const { data } = await api.get<Response>(`/lostitem/`);
  return data;
}
