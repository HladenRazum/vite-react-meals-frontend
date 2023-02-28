import { useEffect, useState } from "react";

const useStatusMessage = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);

      const timeout = setTimeout(() => {
         setIsVisible(false);
      }, 3000);

      return () => {
         clearTimeout(timeout);
      };
   });
};

export default useStatusMessage;
