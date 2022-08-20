import HeaderIsAuth from "../../features/headerIsAuth/components";
import React, { useEffect, useState } from "react";
import styles from "./KittyScreen.module.scss";
import { getKitty } from "../../features/kitty/kitty.service";

const KittyScreen: React.FC = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    getKitty().then((response) => {
        setImg(response.src)
      }).catch(e => {
        console.log(e);
      });
  }), [];

  return (
    <div>
      <HeaderIsAuth></HeaderIsAuth>
      <img src={img} className={ styles.kitty }/>
    </div>
  );
};

export default KittyScreen;