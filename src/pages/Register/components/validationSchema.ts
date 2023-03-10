import * as yup from "yup";

const validationSchema = yup.object({
   email: yup.string().required(),
   username: yup.string().required(),
   password: yup.string().required(),
});

export type FormData = yup.InferType<typeof validationSchema>;

export default validationSchema;
