import { Route } from "react-router-dom";
import { ROUTES } from "./routes";

const getRoutes = (): JSX.Element[] => {
   const routes: JSX.Element[] = [];

   for (const route in ROUTES) {
      if (route in ROUTES) {
         const { path, element } = ROUTES[route as keyof typeof ROUTES];

         const props = {
            key: path,
            path,
            element,
         };

         routes.push(
            <Route key={props.path} path={props.path} element={props.element} />
         );
      }
   }

   return routes;
};

export default getRoutes;
