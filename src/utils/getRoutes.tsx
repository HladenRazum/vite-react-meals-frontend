import { Route } from "react-router-dom";
import { ROUTES } from "./routes";

const getRoutes = (): JSX.Element[] => {
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

   return paths;
};

export default getRoutes;
