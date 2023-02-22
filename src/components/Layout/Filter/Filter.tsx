import { useState } from "react";
import "./Filter.scss";

const Filter: React.FC = () => {
   const [isVisible, setIsVisible] = useState(false);

   const toggleVisible = () => {
      setIsVisible((isVisible) => !isVisible);
   };

   // TODO:
   // 1. Convert filter items to array of objects and map them instead of hadrcoding them here
   // 2. Try displaying only the first 3 filter items (as a subarray);
   // 3. On Show more click, display the rest of the elements

   return (
      <div className="Filter test-border">
         <h3 className="title border-bottom">Категория</h3>
         <button onClick={toggleVisible}>Show more</button>
         <form>
            <div className="filter-item">
               <label htmlFor="alcohol">Алкохол</label>
               <input type="checkbox" name="alcohol" id="alcohol" />
            </div>
            <div className="filter-item">
               <label htmlFor="lamb-meat">Агнешко месо</label>
               <input type="checkbox" name="lamb-meat" id="lamb-meat" />
            </div>
            <div className="filter-item">
               <label htmlFor="banitsa">Баница</label>
               <input type="checkbox" name="banitsa" id="banitsa" />
            </div>
            <div className="filter-item">
               <label htmlFor="garnish">Гарнитури</label>
               <input type="checkbox" name="garnish" id="garnish" />
            </div>
            <div className="filter-item">
               <label htmlFor="dairy">Млечни продукти</label>
               <input type="checkbox" name="dairy" id="dairy" />
            </div>
            <div className="filter-item">
               <label htmlFor="salad">Салати</label>
               <input type="checkbox" name="salad" id="salad" />
            </div>
         </form>
      </div>
   );
};

export default Filter;
