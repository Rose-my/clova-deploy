import api from "./api";
import { GetNotiTypes } from "./getNoti";

export interface Response {
  message: string;
  data: GetNotiOneTypes;
}

export interface GetNotiOneTypes extends GetNotiTypes {
  contents: string;
}

export async function getNotiOne(noticeid: number) {
  const { data } = await api.get<Response>(`/informations/notice/${noticeid}/`);
  return data;
}
