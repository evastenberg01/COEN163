import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Here, users can create an account, log in, get help, or contact. Default page.
import Landing from "./pages/Landing.jsx";

// For viewing/searching for DJs and stations.
import Home from "./pages/Home";

// This shows when viewers click on a station to join. Features station information and a chat feature.
import Listening from "./pages/Listening";

// This shows when a DJ hosts a station. Features station information, chat feature, and additional host controls.
import Hosting from "./pages/Hosting";

// Shows account information and gives the option to edit.
import Account from "./pages/Account";

// General help information, linked to from the landing page.
import Help from "./pages/Help";

// A simple contact form page. Linked to from the landing page.
import Contact from "./pages/Contact";

// View of another user's account
import User from "./pages/User";

// Login form page
import Login from "./pages/Login"

// Create account form page
import CreateAccount from "./pages/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/listening",
    element: <Listening />,
  },
  {
    path: "/hosting",
    element: <Hosting />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
