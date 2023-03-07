import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useRegister from "./useRegister";
import validationSchema, { FormData } from "./validationSchema";
import ReactFormInput from "../../../components/ReactFormInput/ReactFormInput";

const RegisterForm: React.FC = () => {
   const { sendRequest, isLoading, error } = useRegister();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormData>({
      resolver: yupResolver(validationSchema),
      mode: "onSubmit",
   });

   const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
      sendRequest();
      reset();
   };

   return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
         {isLoading ? <p className="test">Loading...</p> : null}
         {error ? <p className="test">{error}</p> : null}
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
      </form>
   );
};

export default RegisterForm;
