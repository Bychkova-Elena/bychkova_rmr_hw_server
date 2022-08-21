import { HeaderIsAuth } from "../../features/layout/headerIsAuth/components";
import React, { useEffect } from "react";
import styles from "./KittyScreen.module.scss";
import { getKitty } from "../../features/kitty/kitty.service";
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import { routes } from "./../../infrastructure/routes/routes";

export const KittyScreen: React.FC = () => {
  
  let navigate = useNavigate();
  const { isLoading, isError, isSuccess, data } = useQuery('kitty', getKitty);

    if (isError) { 
      navigate(`${routes.login.create()}`);
    }

  return (
    <div>
      <HeaderIsAuth></HeaderIsAuth>
      <div className={styles.kitty}>
        {isSuccess && <img src={data.src} />}
        {isLoading && <p>Loading..</p>}
      </div>
    </div>
  );
};