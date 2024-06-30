import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Resume from "../components/Resume";

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
      {
        path: "/resume",
        element: <Resume />,
      },

      //   {
      //     path: "/*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);

export default router;
