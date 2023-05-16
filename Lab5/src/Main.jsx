import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Navbar';
import Profile from './Profile';
import Welcome from './Welcome';
import Leaderboard from './Leaderboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/Navbar",
    element: <Navbar/>,
  },
  {
    path: "/Welcome",
    element: <Welcome/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Leaderboard",
    element: <Leaderboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);