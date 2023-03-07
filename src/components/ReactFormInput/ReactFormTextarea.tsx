import { FieldError } from "react-hook-form";

type ReactFormTextareaProps = {
   id: string;
   label: string;
   name: string;
   error?: FieldError | undefined;
   register: any;
};

const ReactFormTextarea: React.FC<ReactFormTextareaProps> = ({
   id,
   label,
   name,
   error,
   register,
}) => {
   return (
      <div className="formGroup">
         <label htmlFor={id}>{label}</label>
         <textarea
            id={id}
            placeholder={label}
            name={name}
            className="non-resizable-x"
            rows={5}
            autoComplete="off"
            {...register(name)}
         />
         {error && <p className="error">{error.message}</p>}
      </div>
   );
};

export default ReactFormTextarea;
