import { Link } from "react-router-dom";
import ThemeSwitch from "../../../features/ThemeSwitch/ThemeSwitch";
import { NavLink } from "../../../types/navLink.type";
import Logo from "../atoms/Logo/Logo";
import "./Navigation.css";

type NavigationProps = {
   links: NavLink[];
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
   if (links.length === 0) {
      return null;
   }

   return (
      <div className="Navigation">
         <div className="inner wrappedWidth">
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
         </div>
      </div>
   );
};

export default Navigation;
