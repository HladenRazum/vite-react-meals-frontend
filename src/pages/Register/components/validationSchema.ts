import * as yup from "yup";

const validationSchema = yup
   .object({
      username: yup.string().required().min(3),
      password: yup.string().required().min(3),
   })
   .required();

export type FormData = yup.InferType<typeof validationSchema>;

export default validationSchema;
