type FormTextAreaProps = {
   name: string;
   label: string;
   rows?: number;
   placeholder?: string;
};

const FormTextArea: React.FC<FormTextAreaProps> = ({
   name,
   label,
   rows = 5,
   placeholder,
}) => {
   return (
      <div className="formGroup">
         <label htmlFor={name}>{label}</label>
         <textarea
            id={name}
            placeholder={placeholder}
            className="non-resizable-x"
            rows={rows}
         />
      </div>
   );
};

export default FormTextArea;
