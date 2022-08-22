import React, { useCallback } from "react";
import { Button } from "../../../../ui-library/components/Button";
import styles from "./HeaderIsAuth.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../infrastructure/routes/routes";
import { getUserName, logout } from "../headerIsAuth.service";
import { useQuery } from 'react-query';
import { useUserContext } from "../../../../screens/KittyScreen/KittyScreen";

export const HeaderIsAuth: React.FC = () => {
  const context = useUserContext();
  const { isSuccess, data } = useQuery('userName', getUserName);
  let navigate = useNavigate();

  if (data) { 
    context.name = data.name;
  }

  const handleLogOut = useCallback(() => {
    logout().then(() => {
       context.name = "";
       navigate(`${routes.login.create()}`);
      }).catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <header className="header">
    <img src="https://flomaster.club/uploads/posts/2021-12/1639497469_1-flomaster-club-p-risunki-dlya-srisovki-nyan-ket-krasivie-ri-1.png" />
      {isSuccess &&
      <div className={styles.headerInfo} >
        <span>Welcome, { data.name }!</span>
        <Button onClick={handleLogOut}>Log Out</Button>
        </div>
      }
    </header>
  )
}