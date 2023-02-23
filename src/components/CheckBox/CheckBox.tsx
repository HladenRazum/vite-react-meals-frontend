import { ChangeEvent } from "react";

type CheckboxProps = {
   id: string;
   name: string;
   label: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckboxProps> = ({ id, name, label, onChange }) => {
   return (
      <div key={id} className="filter-item">
         <label htmlFor={id}>{label}</label>
         <input
            type="checkbox"
            name={name}
            id={id}
            value={name}
            onChange={onChange}
         />
      </div>
   );
};

export default CheckBox;
