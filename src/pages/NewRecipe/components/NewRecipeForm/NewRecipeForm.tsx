const numberOfRows = 5;

const NewRecipeForm: React.FC = () => {
   return (
      <>
         <form className="form wide">
            <div className="formGroup">
               <label htmlFor="name">Recipe name</label>
               <input type="text" id="name" placeholder="name" />
            </div>
            <div className="formGroup">
               <label htmlFor="ingredients">Ingredients</label>
               <textarea
                  id="ingredients"
                  placeholder="ingredients"
                  className="non-resizable-x"
                  rows={numberOfRows}
               />
            </div>
            <div className="formGroup">
               <label htmlFor="cooking-instructions">Ingredients</label>
               <textarea
                  id="cooking-instructions"
                  placeholder="Cooking instructions"
                  className="non-resizable-x"
                  rows={numberOfRows}
               />
            </div>
         </form>
      </>
   );
};

export default NewRecipeForm;
