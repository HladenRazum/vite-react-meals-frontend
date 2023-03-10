import { useState } from "react";
import { useMutation } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema, { FormData } from "./validationSchema";
import { UserRequestObjectType } from "../types/userRequestObject.type";
import ReactFormInput from "../../../components/ReactFormInput/ReactFormInput";
import userAPI from "../../../api/user.api";

const RegisterForm: React.FC = () => {
   const [serverValidationError, setServerValidationError] = useState<
      null | string
   >(null);
   const [successMessage, setSuccessMessage] = useState<null | string>(null);

   const { mutate } = useMutation(
      (user: UserRequestObjectType) => userAPI.register(user),
      {
         onSuccess: (data: any) => {
            if (data.user) {
               setSuccessMessage("Successfully registered!");
            } else if (data.data.message) {
               setServerValidationError(data.data.message);
            } else {
               setServerValidationError("Something went wrong");
            }
         },
         onError: (err: any) => {
            setServerValidationError(err.toString());
         },
      }
   );

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(validationSchema),
      mode: "onSubmit",
   });

   const onSubmit: SubmitHandler<FormData> = ({
      username,
      password,
      email,
   }) => {
      setSuccessMessage(null);
      setServerValidationError(null);

      const userData: UserRequestObjectType = {
         user: {
            username,
            password,
            email,
         },
      };

      mutate(userData);
   };

   return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
         <ReactFormInput
            id="email"
            name="email"
            label="Email"
            register={register}
            error={errors.email}
         />
         <ReactFormInput
            id="username"
            name="username"
            label="Username"
            register={register}
            error={errors.username}
         />
         <ReactFormInput
            id="password"
            name="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password}
         />
         <button className="fullWidth" type="submit" disabled={false}>
            {"SignUp"}
         </button>
         {serverValidationError && <p>{serverValidationError}</p>}
         {successMessage && <p>{successMessage}</p>}
      </form>
   );
};

export default RegisterForm;
