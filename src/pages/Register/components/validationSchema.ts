import * as yup from "yup";

const validationSchema = yup
   .object({
      username: yup.string().required(),
      password: yup.string().required(),
   })
   .required();

export type FormData = yup.InferType<typeof validationSchema>;

export default validationSchema;
