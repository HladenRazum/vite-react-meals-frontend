import * as yup from "yup";
import { NEW_RECIPE_VALIDATION_MESSAGES } from "../../constants/validation-messages";

const validationSchema = yup.object({
   recipeName: yup
      .string()
      .required(NEW_RECIPE_VALIDATION_MESSAGES.NAME_REQUIRED),
   cookingInstructions: yup
      .string()
      .required(NEW_RECIPE_VALIDATION_MESSAGES.INSTRUCTIONS_REQUIRED),
   ingredients: yup
      .string()
      .required(NEW_RECIPE_VALIDATION_MESSAGES.INGREDIENTS_REQUIRED),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default validationSchema;
