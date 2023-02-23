import { useEffect, useState } from "react";

export type FilterItem = {
   id: string;
   name: string;
   label: string;
};

const useFilters = () => {
   const [filters, setFilters] = useState<FilterItem[]>([]);

   const getFilters = async () => {
      try {
         const response = await fetch("http://localhost:9999/categories");
         const data = await response.json();
         setFilters(data);
      } catch (error) {
         console.log(error);
         setFilters([]);
      }
   };

   useEffect(() => {
      getFilters();
   }, []);

   return {
      filters,
      getFilters,
   };
};

export default useFilters;
