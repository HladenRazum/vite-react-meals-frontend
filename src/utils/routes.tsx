import { ReactElement } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";

type Route = {
   name: string;
   path: string;
   element: ReactElement;
};

type Routes = Record<RouteName, Route>;

export const ROUTES: Routes = {
   home: {
      path: "/",
      name: "home",
      element: <Home />,
   },
   register: {
      name: "register",
      path: "/register",
      element: <Register />,
   },
   notFound: {
      name: "notFound",
      path: "*",
      element: <NotFound />,
   },
};

export enum RouteName {
   Home = "home",
   Register = "register",
   NotFound = "notFound",
}
