import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Link.module.scss";

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

const Link: React.FC<LinkProps> = ({ href, className = styles.link, children }) => (
  <a href={href} className={ className }> {children}</a>
);

export default React.memo(Link);