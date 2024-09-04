import { useEffect } from "react";

const useSetScreenSize = () => {
  const setScreenSize = () => {
    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty("--app-max-width", `${maxWidth}px`);
  };

  function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  window.addEventListener("resize", adjustHeight);
  window.addEventListener("load", adjustHeight);

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);
};

export default useSetScreenSize;
