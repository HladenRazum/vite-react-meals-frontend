import { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice, { changeTheme, getTheme } from "../../store/user/userSlice";
import classes from "./ThemeSwitch.module.scss";

const ThemeSwitch: React.FC = () => {
   const dispatch = useDispatch();

   const toggleTheme = () => {
      dispatch(changeTheme("high-contrast"));
   };

   const handleSubmit = (e: FormEvent) => {
      console.log(e.target);
   };

   const handleChange = (e: FormEvent) => {
      handleSubmit(e);
   };

   return (
      <form className={classes.ThemeSwitch} onSubmit={handleSubmit}>
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
