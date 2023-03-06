import { Link } from "react-router-dom";
import ThemeSwitch from "../../../features/ThemeSwitch/ThemeSwitch";
import { NavLink } from "../../../types/navLink.type";
import Logo from "../../atoms/Logo/Logo";
import classes from "./Navigation.module.scss";

type NavigationProps = {
   links: NavLink[];
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
   if (links.length === 0) {
      return null;
   }

   return (
      <div className={classes.Navigation}>
         <div className={`${classes.inner} wrappedWidth`}>
            <Logo />
            <nav>
               <ul>
                  {links.map((link) => (
                     <li key={link.name}>
                        <Link to={link.to}>{link.name}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
            <ThemeSwitch />
         </div>
      </div>
   );
};

export default Navigation;
