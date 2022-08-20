import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

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
  className = styles.btn,
  type
}) => (
  <button onClick={onClick} disabled={disabled} className={className} type={ type }>
    {children}
  </button>
);

export default React.memo(Button);