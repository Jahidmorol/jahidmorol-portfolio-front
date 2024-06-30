import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Contacts from "../components/Contacts";
import Blog from "../components/Blog";

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

      //   {
      //     path: "/*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);

export default router;
