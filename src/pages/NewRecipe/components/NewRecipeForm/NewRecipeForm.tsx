import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
   recipeName: string;
   ingredients: string;
   cookingInstrictions: string;
};

const NewRecipeForm: React.FC = () => {
   const { register, handleSubmit, reset } = useForm<FormData>();

   const onSubmit: SubmitHandler<FormData> = ({
      recipeName,
      ingredients,
      cookingInstrictions,
   }) => {
      console.log({ recipeName, ingredients, cookingInstrictions });
      reset();
   };

   return (
      <form className="form wide" onSubmit={handleSubmit(onSubmit)}>
         <div className="formGroup">
            <label htmlFor="recipe-name">Recipe name</label>
            <input
               type="text"
               id="recipe-name"
               placeholder="Recipe Name"
               {...register("recipeName")}
            />
         </div>
         <div className="formGroup">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
               id="ingredients"
               placeholder="Ingredients"
               className="non-resizable-x"
               rows={5}
               {...register("ingredients")}
            />
         </div>
         <div className="formGroup">
            <label htmlFor="cooking-instructions">Cooking Instructions</label>
            <textarea
               id="cooking-instructions"
               placeholder="Cooking instructions"
               className="non-resizable-x"
               rows={5}
               {...register("cookingInstrictions")}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
};

export default NewRecipeForm;
