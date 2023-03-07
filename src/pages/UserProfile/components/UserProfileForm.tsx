import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import ReactFormInput from "../../../components/ReactFormInput/ReactFormInput";
import { UserProfileFormData, validationSchema } from "./validationSchema";

const UserProfileForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<UserProfileFormData>({
      resolver: yupResolver(validationSchema),
   });

   const onSubmit: SubmitHandler<UserProfileFormData> = ({
      username,
      firstName,
      lastName,
   }) => {
      console.log({ username, firstName, lastName });
   };

   return (
      <div>
         <form className="form wide" onSubmit={handleSubmit(onSubmit)}>
            <ReactFormInput
               id="username"
               name="username"
               label="Username"
               register={register}
               error={errors.username}
            />

            <ReactFormInput
               id="first-name"
               name="firstName"
               label="First Name"
               register={register}
               error={errors.firstName}
            />

            <ReactFormInput
               id="last-name"
               name="lastName"
               label="Last Name"
               register={register}
               error={errors.lastName}
            />

            <p>Bio: This can be replaced with RichTextEditor component</p>
            <button type="submit">Update Profile</button>
         </form>
      </div>
   );
};

export default UserProfileForm;
