import React from "react";
import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren<{
  href: string;
}>;

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href}> {children}</a>
);

export default React.memo(Link);