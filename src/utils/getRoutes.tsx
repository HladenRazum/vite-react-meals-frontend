import { Route } from "react-router-dom";
import { ROUTES } from "./routes";

const getRoutes = (): JSX.Element[] => {
   const paths: JSX.Element[] = [];

   for (const route in ROUTES) {
      if (route in ROUTES) {
         const { path, element } = ROUTES[route as keyof typeof ROUTES];

         const props = {
            key: path,
            path,
            element,
         };

         paths.push(
            <Route key={props.path} path={props.path} element={props.element} />
         );
      }
   }

   return paths;
};

export default getRoutes;
