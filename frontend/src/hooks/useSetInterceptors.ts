import { useLayoutEffect } from "react";
import api from "@api/api";
import { getToken } from "@utils/token";

const useSetInterceptors = () => {
  useLayoutEffect(() => {
    api.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });
  });
};

export default useSetInterceptors;
