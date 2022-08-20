import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../ui-library/components/Button";
import styles from "./HeaderIsAuth.module.scss";
import { useNavigate } from "react-router-dom";
import routes from "../../../infrastructure/routes/routes";
import { getUserName, logout } from "../headerIsAuth.service";

const HeaderIsAuth: React.FC = () => {

  const [name, setName] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
      getUserName().then((response) => {
        setName(response.name)
      }).catch(e => {
        console.log(e);
      });
    }), [];

  const handleLogOut = useCallback(() => {
    logout().then(() => {
       navigate(`${routes.login.create()}`);
      }).catch(e => {
        console.log(e);
      });
}, []);
  
  return (
    <header>
    <img src="https://flomaster.club/uploads/posts/2021-12/1639497469_1-flomaster-club-p-risunki-dlya-srisovki-nyan-ket-krasivie-ri-1.png" />
      <div className={ styles.headerInfo } >
        <span>Welcome, { name }!</span>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </header>
  )
}

export default React.memo(HeaderIsAuth);