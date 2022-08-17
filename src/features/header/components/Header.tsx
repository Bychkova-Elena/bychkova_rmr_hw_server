import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../ui-library/components/Button";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import routes from "../../../infrastructure/routes/routes";
import { getUserProfile, logout } from "../header.service";

const Header: React.FC = () => {

  const [name, setName] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (document.cookie) { 
      const profile = async () => { 
        setName((await getUserProfile()).name)
      }
      profile()
    }
  }), [name];

  const handleLogOut = useCallback(() => {
  logout()
        .then(res => {
          console.log(res.data);
          navigate(`${routes.login.create()}`);
        })
}, []);
  
  return (
    <header>
    <img src="https://flomaster.club/uploads/posts/2021-12/1639497469_1-flomaster-club-p-risunki-dlya-srisovki-nyan-ket-krasivie-ri-1.png" />
      { document.cookie && <div className="headerInfo">
        <span>Welcome, { name }!</span>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div> }
    </header>
  )
}

export default React.memo(Header);