import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      //   {
      //     path: "/*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);

export default router;
