interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
   name: string;
   label: string;
   placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
   name,
   label,
   placeholder,
   ...rest
}) => {
   return (
      <div className="formGroup">
         <label htmlFor="name">{label}</label>
         <input type="text" id={name} placeholder={placeholder} {...rest} />
      </div>
   );
};

export default TextField;
