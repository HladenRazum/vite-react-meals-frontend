import { FieldError } from "react-hook-form/dist/types";

type ReactFormInputType = {
   label: string;
   id: string;
   register: any;
   name: string;
   error?: FieldError | undefined;
   type?: "password" | "email" | "text";
};

const ReactFormInput: React.FC<ReactFormInputType> = ({
   register,
   error,
   label,
   id,
   name,
   type = "text",
   ...inputProps
}) => {
   return (
      <div className="formGroup">
         <label htmlFor={id}>{label}</label>
         <input
            id={id}
            name={name}
            type={type}
            placeholder={label}
            {...register(name)}
            {...inputProps}
            // autoComplete="off"
         />
         {error && <p className="error">{error.message}</p>}
      </div>
   );
};

export default ReactFormInput;
