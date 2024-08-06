import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

/* 사파리 웹 뷰 브라우저 상속 스타일 제거 */
input, textarea,button {
  border-radius: 0;
  appearance: none;
}

html, #root{
  height: 100dvh;
}

a{
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

#root, body, html {
  max-width: 39rem;
  margin: 0 auto;
  padding:0;
  font-size: 62.5%;
  -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
  scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
}

#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

html {
  @font-face {
    font-family: Pretendard-Regular;
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
    font-weight: normal;
  }
}
`;

export default GlobalStyle;
