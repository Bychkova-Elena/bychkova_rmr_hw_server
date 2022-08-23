import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import cn from 'classnames';

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

export const Button: React.FC<ButtonProps> = React.memo(({
  onClick = () => {},
  children,
  disabled = false,
  className,
  type
}) => (
  <button onClick={onClick} disabled={disabled} className={cn(styles.btn, className)} type={ type }>
    {children}
  </button>
));