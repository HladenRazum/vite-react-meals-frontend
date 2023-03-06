import { NavLink } from "../types/navLink.type";
import { ROUTES } from "./routes";
import store from "../store/index";

const userId = store.getState().user.user.id;
const userProfilePath = ROUTES.userProfile.path.replace(":userId", "") + userId;

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
      name: ROUTES.newRecipe.name,
      to: ROUTES.newRecipe.path,
   },
   {
      name: ROUTES.userProfile.name,
      to: userProfilePath,
   },
   {
      name: ROUTES.testing.name,
      to: ROUTES.testing.path,
   },
];

export default NAV_LINKS;
