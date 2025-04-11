import { RouteObject } from "react-router-dom";
import About from "../components/About";
import Login from "../components/Login";
import Signin from "../components/Singin";

const routes: RouteObject[] = [
  { path: "/", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
];

export default routes;
