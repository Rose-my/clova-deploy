// import reactLogo from "./assets/react.svg";
// <img src={reactLogo} className="logo react" alt="React logo" />

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { createBrowserRouter } from "react-router-dom";
import Settings from "@pages/settings";
import Login from "@pages/login";
import Pretask from "@pages/pretask";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Settings />,
    children: [
      { index: true, element: <Pretask /> },
      { path: "/login", element: <Login /> },
      { path: "/pretask", element: <Pretask /> },
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
