import React from "react";
import { PropsWithChildren } from "react";
import "./Link.css";

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

const Link: React.FC<LinkProps> = ({ href, className, children }) => (
  <a href={href} className={ className }> {children}</a>
);

export default React.memo(Link);