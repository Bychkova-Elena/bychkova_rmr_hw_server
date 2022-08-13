import React from "react";
import { PropsWithChildren } from "react";

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset"
}

type ButtonProps = PropsWithChildren<{
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  type?: ButtonType; 
}>;

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  children,
  disabled = false,
  className,
  type
}) => (
  <button onClick={onClick} disabled={disabled} className={className} type={ type }>
    {children}
  </button>
);

export default React.memo(Button);