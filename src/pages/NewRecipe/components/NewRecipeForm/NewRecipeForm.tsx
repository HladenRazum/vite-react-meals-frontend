import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactFormInput from "../../../../components/ReactFormInput/ReactFormInput";
import ReactFormTextarea from "../../../../components/ReactFormInput/ReactFormTextarea";
import validationSchema, { FormData } from "./validationSchema";

const NewRecipeForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(validationSchema),
   });

   const onSubmit: SubmitHandler<FormData> = ({
      recipeName,
      ingredients,
      cookingInstructions,
   }) => {
      console.log({ recipeName, ingredients, cookingInstructions });
      reset();
   };

   return (
      <form className="form wide" onSubmit={handleSubmit(onSubmit)}>
         <ReactFormInput
            id="recipe-name"
            name="recipeName"
            label="Recipe Name"
            register={register}
            error={errors.recipeName}
         />

         <ReactFormTextarea
            id="ingredients"
            name="ingredients"
            label="Ingredients"
            register={register}
            error={errors.ingredients}
         />

         <ReactFormTextarea
            id="cooking-instructions"
            name="cookingInstructions"
            label="Cooking Instructions"
            register={register}
            error={errors.cookingInstructions}
         />

         <button type="submit">Submit</button>
      </form>
   );
};

export default NewRecipeForm;
