import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Homepage/Home/Home";
import Layout02 from "../../layouts/Layout02";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout02></Layout02>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
