import React from "react";

import Button from "@mui/material/Button";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconLV from "../../images/icono luz final.png";

import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";

const HeaderApp = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className={styles.header_container}>
      <div className={styles.logo}>
        <img className={styles.icon} src={IconLV} alt="" />
        <h2 className={styles.name_page}>Luz Vera</h2>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button_car}>
          <AddShoppingCartIcon />
        </button>

        <Button
          variant="outlined"
          color="primary"
          className={styles.input_button}
          onClick={handleLogin}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="outlined"
          className={styles.input_button}
          onClick={handleRegister}
        >
          Registrarse
        </Button>
      </div>
    </div>
  );
};

export default HeaderApp;
