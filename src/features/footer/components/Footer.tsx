import React from "react";
import Link from "../../../ui-library/components/Link";
import "./Footer.scss";

const Footer = () => { 

  return (
    <footer>
      <Link href="https://youtube.com/c/Kittisaurus">More kittens</Link>
    </footer>
  )
}

export default React.memo(Footer);