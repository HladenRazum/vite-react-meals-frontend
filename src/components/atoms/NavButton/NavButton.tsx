import { useNavigate } from "react-router";
import BackIcon from "../BackIcon/BackIcon";
import classes from "./NavButton.module.scss";

type NavButtonProps = {
   type?: "back" | "forward";
};

const NavButton: React.FC<NavButtonProps> = ({ type = "back" }) => {
   const navigate = useNavigate();

   const handleNavigate = () => {
      switch (type) {
         case "forward": {
            navigate(1);
            break;
         }

         case "back": {
            navigate(-1);
            break;
         }

         default:
            break;
      }
   };

   return (
      <button
         type="button"
         className={classes.NavButton}
         onClick={handleNavigate}
      >
         {type === "back" ? <BackIcon /> : "forward"}
      </button>
   );
};

export default NavButton;
