import { useForm } from "react-hook-form";

type Inputs = {
   username: string;
   password: string;
};

const RegisterForm: React.FC = () => {
   const { handleSubmit } = useForm<Inputs>();

   return <form>test</form>;
};

export default RegisterForm;
