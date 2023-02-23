import { ChangeEvent, useState } from "react";
import useFilters from "./useFilters";
import "./Filter.scss";
import CheckBox from "../../CheckBox/CheckBox";

const Filter: React.FC = () => {
   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
   const { filters } = useFilters();

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = e.target;

      if (checked) {
         setSelectedFilters([...selectedFilters, value]);
      } else {
         setSelectedFilters(
            selectedFilters.filter((filter) => filter !== value)
         );
      }
   };

   return (
      <div className="Filter">
         <h3 className="title border-bottom">Категория</h3>
         <form>
            {filters.length > 0 &&
               filters.map((filter) => (
                  <CheckBox
                     key={filter.id}
                     {...filter}
                     onChange={onChangeHandler}
                  />
               ))}
         </form>
      </div>
   );
};

export default Filter;
