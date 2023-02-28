import { ChangeEvent, useState } from "react";
import useFilters from "./useFilters";
import CheckBox from "../../CheckBox/CheckBox";
import Paper from "../../atoms/Paper/Paper";
import "./Filter.scss";

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
      <Paper>
         <div className="Filter">
            <h3 className="title border-bottom">Категория</h3>
            <form>
               {filters.length === 0 && <p>No results</p>}
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
      </Paper>
   );
};

export default Filter;
