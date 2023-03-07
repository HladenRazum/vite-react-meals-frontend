import * as yup from "yup";

const validationSchema = yup.object({
   recipeName: yup.string().required("Recipe name is required"),
   cookingInstructions: yup
      .string()
      .required("Cooking instructions are required"),
   ingredients: yup.string().required("Ingredients are required"),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default validationSchema;
