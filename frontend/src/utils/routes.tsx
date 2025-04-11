import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard";
import Post from "../components/Post";
import Profile from "../components/Profile";

const routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/post", element: <Post/> },
  { path: "/profile", element: <Profile/> },
];

export default routes;
