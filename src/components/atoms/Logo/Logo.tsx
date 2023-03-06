import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";
import classes from "./Logo.module.scss";

const Logo: React.FC = () => {
   return (
      <Link to="/" className={classes.Logo}>
         <img src={logo} />
      </Link>
   );
};

export default Logo;
