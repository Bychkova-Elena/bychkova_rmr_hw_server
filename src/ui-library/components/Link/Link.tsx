import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Link.module.scss";

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export const Link: React.FC<LinkProps> = React.memo(({ href, className = styles.link, children }) => (
  <a href={href} className={ className }> {children}</a>
));