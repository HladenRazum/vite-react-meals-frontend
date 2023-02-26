import { NavLink } from "../types/NavLink";
import { ROUTES } from "./routes";

const NAV_LINKS: NavLink[] = [
   {
      name: ROUTES.home.name,
      to: ROUTES.home.path,
   },
   {
      name: ROUTES.register.name,
      to: ROUTES.register.path,
   },
   {
      name: ROUTES.testing.name,
      to: ROUTES.testing.path,
   },
];

export default NAV_LINKS;
