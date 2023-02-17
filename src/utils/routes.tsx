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

export const getRoutes = (): JSX.Element[] => {
   const paths: JSX.Element[] = [];

   for (const route in ROUTES) {
      if (route in ROUTES) {
         const { path, component } = ROUTES[route as keyof typeof ROUTES];
         const props = {
            key: path,
            path,
            component,
         };
         paths.push(
            <Route
               key={props.path}
               path={props.path}
               element={props.component()}
            />
         );
      }
   }
   console.log(paths);
   return paths;
};
