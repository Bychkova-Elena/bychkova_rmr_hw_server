import React, { useEffect, useState } from "react";
import API from '../../infrastructure/request/request.service';
import "./KittyScreen.css"

const KittyScreen: React.FC = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const getKitty = async () => {
      await API.get(`kitty`, {
        withCredentials: true,
      })
        .then((res: any) => {
          console.log(res.data);
          setImg(res.data.src)
        })
  };
    getKitty();
  }), [];

  return (
    <div className="kitty">
      <img src={img} />
    </div>
  );
};

export default KittyScreen;