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
