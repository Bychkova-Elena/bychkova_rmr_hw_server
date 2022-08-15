import { useKittyContext } from "../../App";
import React from "react";
import Button from "../../ui-library/components/Button";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import routes from "../../infrastructure/routes/routes";

const Header: React.FC = () => {

  const KittyContext = useKittyContext();
  let navigate = useNavigate();

  const handleLogOut = () => {
    navigate(`${routes.login.create()}`);
    KittyContext.isAuth = false;
  }
  
  return (
    <header>
    <img src="https://flomaster.club/uploads/posts/2021-12/1639497469_1-flomaster-club-p-risunki-dlya-srisovki-nyan-ket-krasivie-ri-1.png" />
      { KittyContext.isAuth && <div className="headerInfo">
        <span>Welcom, Lena!</span>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div> }
    </header>
  )
}

export default React.memo(Header);