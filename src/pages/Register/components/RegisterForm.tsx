import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema, { FormData } from "./validationSchema";

const RegisterForm: React.FC = () => {
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
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input
               type="text"
               placeholder="username"
               {...register("username")}
               id="username"
            />
            <p className="error">{errors.username?.message}</p>
         </div>
         <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
               type="text"
               placeholder="password"
               {...register("password")}
               id="password"
            />
            <p className="error">{errors.password?.message}</p>
         </div>
         <button className="fullWidth" type="submit">
            SignUp
         </button>
      </form>
   );
};

export default RegisterForm;
