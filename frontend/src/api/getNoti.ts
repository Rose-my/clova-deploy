import api from "./api";

export interface Response {
  message: string;
  data: GetNotiTypes[];
}

export interface GetNotiTypes {
  noticeId: number;
  title: string;
  noticeDate: string;
}

export async function getNoti() {
  const { data } = await api.get<Response>(`/informations/notice/`);
  return data;
}
