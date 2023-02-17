import { Link } from "react-router-dom";
import { NavLink } from "../../../types/NavLink";

type NavigationProps = {
   links: NavLink[];
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
   if (links.length === 0) {
      return null;
   }

   return (
      <nav>
         <ul>
            {links.map((link) => (
               <li key={link.name}>
                  <Link to={link.to}>{link.name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navigation;
