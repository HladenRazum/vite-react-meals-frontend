import { useState } from "react";

const useRegister = () => {
   const [error, setError] = useState<null | string>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [responseData, setResponseData] = useState<null>(null);

   const sendRequest = async () => {
      setIsLoading(true);
      setError(null);

      try {
         const response = await fetch("https://swapi.dev/api/people/1", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
            },
            // body: JSON.stringify(credentials),
         });

         if (!response.ok) {
            throw new Error("Failed sending the request");
         }

         const responseData = await response.json();

         if (responseData) {
            setResponseData(responseData);
         }
      } catch (error: any) {
         setError(error.message);
      }

      setIsLoading(false);
   };

   return {
      error,
      isLoading,
      responseData,
      sendRequest,
   };
};

export default useRegister;
