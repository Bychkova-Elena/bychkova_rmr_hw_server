import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Link.module.scss";
import cn from 'classnames';

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export const Link: React.FC<LinkProps> = React.memo(({ href, className, children }) => (
  <a href={href} className={cn(styles.link, className) }> {children}</a>
));