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
import PostsAll from "@pages/posts/all";
import PostsOne from "@pages/posts/one";
import Upload from "@pages/upload";
import UploadOne from "@pages/upload/one";
import Mypage from "@pages/mypage";
import MypageUpload from "@pages/mypage/upload";
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
      { path: "/results-top", element: <ResultsTop /> },
      { path: "/results-all", element: <ResultsAll /> },
      { path: "/results-not-found", element: <Notfound /> },

      /*------습득물품-------*/
      { path: "/posts-all", element: <PostsAll /> },
      { path: "/posts-one", element: <PostsOne /> },

      /*------업로드-------*/
      { path: "/upload", element: <Upload /> },
      { path: "/upload/one", element: <UploadOne /> },

      /*------마이페이지---------*/
      { path: "/mypage", element: <Mypage /> },
      { path: "/mypage/upload", element: <MypageUpload /> },
      { path: "/mypage/notification", element: <MypageNotification /> },
      { path: "/mypage/keyword", element: <MypageKeyword /> },
      { path: "/mypage/point", element: <MypagePoint /> },
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
