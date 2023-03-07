import { useMutation } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema, { FormData } from "./validationSchema";
import ReactFormInput from "../../../components/ReactFormInput/ReactFormInput";
import userAPI from "../../../api/user.api";
import { useState } from "react";

const RegisterForm: React.FC = () => {
   const [toastMessage, setToastMessage] = useState("");

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(validationSchema),
      mode: "onSubmit",
   });

   const { mutate, isError, isLoading } = useMutation(userAPI.register, {
      onSuccess: () => {
         setToastMessage("Successfully registered");
      },
   });

   const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
      mutate({ username, password });
      reset();
   };

   return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
         {isLoading && <p>Loading...</p>}
         {isError && (
            <p className="error">There was an error with your request</p>
         )}
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
         <button className="fullWidth" type="submit" disabled={isLoading}>
            SignUp
         </button>
         {toastMessage && toastMessage}
      </form>
   );
};

export default RegisterForm;
