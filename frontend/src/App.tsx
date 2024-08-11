// import reactLogo from "./assets/react.svg";
// <img src={reactLogo} className="logo react" alt="React logo" />

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { createBrowserRouter } from "react-router-dom";
import Settings from "@pages/settings";
import Login from "@pages/login";
import Search from "@pages/pretask/Search";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Settings />,
    children: [
      { index: true, element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
