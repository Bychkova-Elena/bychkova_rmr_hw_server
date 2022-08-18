import HeaderIsAuth from "../../features/headerIsAuth/components";
import React, { useEffect, useState } from "react";
import "./KittyScreen.css"
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
    <div className="kitty">
      <HeaderIsAuth></HeaderIsAuth>
      <img src={img} />
    </div>
  );
};

export default KittyScreen;