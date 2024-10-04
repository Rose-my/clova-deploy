export interface EmailcodeRes {
  verificationCode: string;
}

export interface LoginRes {
  message: string;
  data: {
    id: number;
    username: string;
    nickname: string;
    access_token: string;
  };
}
export interface ImageRes {
  category: string;
  description: string;
  title: string;
  losttime: string;
  lostdate: string;
}
