import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../../store/user/userSlice";
import { Theme } from "../../types/theme.type";
import classes from "./ThemeSwitch.module.scss";

const ThemeSwitch: React.FC = () => {
   const theme = useSelector(getTheme);
   const dispatch = useDispatch();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeTheme(e.target.id as Theme));
   };

   return (
      <div className={classes.ThemeSwitch}>
         <h5>Themes</h5>
         <form>
            <div className={classes.row}>
               <input
                  id="light"
                  type="radio"
                  name="theme"
                  onChange={handleChange}
                  checked={theme === "light"}
               />
               <label htmlFor="light">Light</label>
            </div>
            <div className={classes.row}>
               <input
                  id="dark"
                  type="radio"
                  name="theme"
                  onChange={handleChange}
                  checked={theme === "dark"}
               />
               <label htmlFor="dark">Dark</label>
            </div>
            <div className={classes.row}>
               <input
                  id="high-contrast"
                  type="radio"
                  name="theme"
                  onChange={handleChange}
                  checked={theme === "high-contrast"}
               />
               <label htmlFor="high-contrast">High-contrast</label>
            </div>
         </form>
      </div>
   );
};

export default ThemeSwitch;
