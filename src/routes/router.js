import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allservices",
        element: <AllServices />,
      },
    ],
  },
]);
