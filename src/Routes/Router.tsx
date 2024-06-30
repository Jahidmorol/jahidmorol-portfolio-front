import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Contacts from "../components/Contacts";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";

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
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },

      //   {
      //     path: "/*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);

export default router;
