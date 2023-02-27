import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/user/userSlice";
import { Theme } from "../../types/theme.type";
import classes from "./ThemeSwitch.module.scss";

const ThemeSwitch: React.FC = () => {
   const dispatch = useDispatch();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeTheme(e.target.id as Theme));
   };

   return (
      <form className={classes.ThemeSwitch}>
         <div className={classes.row}>
            <input
               id="light"
               type="radio"
               name="theme"
               onChange={handleChange}
            />
            <label htmlFor="light">Light theme</label>
         </div>
         <div className={classes.row}>
            <input
               id="dark"
               type="radio"
               name="theme"
               onChange={handleChange}
            />
            <label htmlFor="dark">Dark theme</label>
         </div>
         <div className={classes.row}>
            <input
               id="high-contrast"
               type="radio"
               name="theme"
               onChange={handleChange}
            />
            <label htmlFor="high-contrast">High-contrast theme</label>
         </div>
      </form>
   );
};

export default ThemeSwitch;
