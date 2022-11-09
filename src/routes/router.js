import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import UpdatedPage from "../Pages/UpdatedPage/UpdatedPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

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
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "services/:id",
        element: <ViewDetails />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/myreview",
        element: <MyReview />,
      },
      {
        path: "/updatePage/:id",
        element: <UpdatedPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
    ],
  },
]);
