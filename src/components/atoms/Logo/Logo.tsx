import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";
import "./Logo.css";

const Logo: React.FC = () => {
   return (
      <Link to="/" className="Logo">
         <img src={logo} />
      </Link>
   );
};

export default Logo;
