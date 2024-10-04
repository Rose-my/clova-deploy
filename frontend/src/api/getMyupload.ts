import api from "./api";

export interface Response {
  message: string;
  data: GetMyupload[];
}

export interface GetMyupload {
  lostid: number;
  image: string;
  title: string;
  category: string;
  getwhere: string;
  lostdate: string;
}

export async function getMyupload() {
  const { data } = await api.get<Response>(`/informations/mylostitem/`);
  return data;
}
