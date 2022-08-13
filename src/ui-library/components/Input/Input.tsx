import React from "react";
import { ChangeEventHandler } from "react";

type InputProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: string;
  value?: string;
  placeholder?: string;
  className?: string;
  name?: string;
};

const Input: React.FC<InputProps> = ({ onChange, type, placeholder, value, className, name }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className={className}
    name={ name }
  />
);

export default React.memo(Input);