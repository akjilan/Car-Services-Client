import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Homepage/Home/Home";
import Layout02 from "../../layouts/Layout02";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Checkout from "../../pages/Checkout/Checkout";
import Carts from "../../pages/Carts/Carts";
import Services from "../../pages/Homepage/Services/Services";
import About from "../../pages/About/About";
import PrivateRoute from "../private/PrivateRoute";
import BookingUpdate from "../../pages/BookingUpdate/BookingUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/services/${params.id}`),
      },
      {
        path: "bookings/:id",
        element: (
          <PrivateRoute>
            <BookingUpdate></BookingUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Carts></Carts>
          </PrivateRoute>
        ),
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
