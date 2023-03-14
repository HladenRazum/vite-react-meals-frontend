import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../../store/user/userSlice";
import { Theme } from "../../types/theme.type";
import classes from "./ThemeSwitch.module.scss";

const ThemeSwitch: React.FC = () => {
   const [isVisible, setIsVisible] = useState(false);

   const theme = useSelector(getTheme);
   const dispatch = useDispatch();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeTheme(e.target.id as Theme));
   };

   const toggleVisible = () => {
      setIsVisible(!isVisible);
   };

   return (
      <div className={classes.ThemeSwitch}>
         <button
            aria-label="Themes"
            className={classes["switch-theme-button"]}
            onClick={toggleVisible}
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
         </button>
         {isVisible && (
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
         )}
      </div>
   );
};

export default ThemeSwitch;
