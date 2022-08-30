import { HeaderIsAuth } from "../../features/layout/headerIsAuth/components";
import React, { createContext, useContext, useMemo } from "react";
import styles from "./KittyScreen.module.scss";
import { getKitty } from "../../features/kitty/kitty.service";
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import { routes } from "./../../infrastructure/routes/routes";

type UserContextType = {
    name: string
};

const UserContext = createContext<UserContextType>({
    name: ""
});

export const useUserContext = () => useContext(UserContext);

export const KittyScreen: React.FC = () => {
  
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, data } = useQuery('kitty', getKitty);
  const name = "";
    
    const value = useMemo(
    () => ({ name}), 
    [name]
  );

    if (isError) { 
      navigate(`${routes.login.create()}`);
    }

  return (
    <div>
      <UserContext.Provider value={value}>
        <HeaderIsAuth></HeaderIsAuth>
      </UserContext.Provider>
      <div className={styles.kitty}>
        {isSuccess && <img src={data.src} />}
        {isLoading && <p>Loading..</p>}
      </div>
    </div>
  );
};