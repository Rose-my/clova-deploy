import { createGlobalStyle, css } from "styled-components";

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  button,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  /* html {
    background-color: gray;
  } */

  body {
    line-height: 1;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
  max-width: 43rem;
  margin: 0 auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

* {
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

@font-face {
  font-family: WavvePADO-Regular;
  font-style: normal;
  font-weight: normal;
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/WavvePADO-Regular.woff2') format('woff2');
}

@font-face {
  font-family: Sunflower, sans-serif;
  font-style: normal;
  src: url("https://fonts.googleapis.com/css2?family=Dokdo&family=Gaegu&family=Jua&family=Sunflower:wght@300&display=swap");
}

div, p, button, input, h1, h2, h3, h4{
  font-family: WavvePADO-Regular;
}

/* 사파리 웹 뷰 브라우저 상속 스타일 제거 */
input, textarea,button {
  border-radius: 0;
  appearance: none;
}`;

export default GlobalStyle;

/* html {
    background: ${({ theme }) => theme.colors.moddy_wt};
  } */

/* #root {
    background: ${({ theme }) => theme.colors.moddy_wt};
  } */
