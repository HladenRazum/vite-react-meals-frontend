import * as yup from "yup";

export const validationSchema = yup.object({
   username: yup.string().required("Username is required"),
   firstName: yup.string(),
   lastName: yup.string(),
});

export type UserProfileFormData = yup.InferType<typeof validationSchema>;
