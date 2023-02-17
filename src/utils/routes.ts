import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

type Route = {
   path: string;
   component: () => JSX.Element;
};

type Routes = Record<RouteName, Route>;

export const ROUTES: Routes = {
   home: {
      path: "/",
      component: Home,
   },
   register: {
      path: "/register",
      component: Register,
   },
};

export enum RouteName {
   Home = "home",
   Register = "register",
}
