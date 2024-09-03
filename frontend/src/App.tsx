// import reactLogo from "./assets/react.svg";
// <img src={reactLogo} className="logo react" alt="React logo" />

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { createBrowserRouter } from "react-router-dom";
import Settings from "@pages/settings";
import Login from "@pages/login";
import Pretask from "@pages/pretask";
import Splash from "@pages/splash";
import Signup from "@pages/signup";
import Search from "@pages/search";
import ResultsTop from "@pages/results/top";
import ResultsAll from "@pages/results/all";
import Notfound from "@pages/results/notfound";
import FoundAll from "@pages/found/all";
import FoundOne from "@pages/found/one";
import Upload from "@pages/upload";

import Mypage from "@pages/mypage";
import MyuploadAll from "@pages/myupload/all";
import MyuploadOne from "@pages/myupload/one";

import MypageKeyword from "@pages/mypage/keyword";
import MypageNotification from "@pages/mypage/notification";
import MypagePoint from "@pages/mypage/point";
import GlobalStyle from "@styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Settings />,
    children: [
      { index: true, element: <Splash /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/pretask", element: <Pretask /> },

      /*---------검색-------*/
      { path: "/search", element: <Search /> },

      /*----검색결과-------*/
      { path: "/results/top", element: <ResultsTop /> },
      { path: "/results/all", element: <ResultsAll /> },
      { path: "/results/notfound", element: <Notfound /> },

      /*------습득물품-------*/
      { path: "/found/all", element: <FoundAll /> },
      { path: "/found/one", element: <FoundOne /> },

      /*------업로드-------*/
      { path: "/upload", element: <Upload /> },

      /*------마이페이지---------*/
      { path: "/mypage", element: <Mypage /> },
      { path: "/mypage/notification", element: <MypageNotification /> },
      { path: "/mypage/keyword", element: <MypageKeyword /> },
      { path: "/mypage/point", element: <MypagePoint /> },

      /*-----내가 업로드한------ */
      { path: "/myupload/all", element: <MyuploadAll /> },
      { path: "/myupload/one", element: <MyuploadOne /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
