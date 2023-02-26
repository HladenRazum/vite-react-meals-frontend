import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../store/user/userSlice";

const useTheme = () => {
   const theme = useSelector(getTheme);

   useEffect(() => {
      if (theme) {
         document.body.setAttribute("class", theme);
      }
   }, []);
};

export default useTheme;
