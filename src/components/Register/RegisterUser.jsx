import React, { useState } from "react";
import styles from "./register-user.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { newUser } from "../../services/courseAPI";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const handleRegisterUser = () => {
    if (passwordOne === passwordTwo) {
      newUser(email, passwordTwo);
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_container_input}>
        <h2>Registrate</h2>
        <TextField
          id="user"
          label="Correo electrónico"
          variant="outlined"
          className={styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          className={styles.input}
          value={passwordOne}
          onChange={(e) => {
            setPasswordOne(e.target.value);
          }}
        />
        <TextField
          id="passwordConfirm"
          label="Confirmar contraseña"
          variant="outlined"
          type="password"
          className={styles.input}
          value={passwordTwo}
          onChange={(e) => {
            setPasswordTwo(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          className={styles.input_button}
          onClick={handleRegisterUser}
        >
          Registrar
        </Button>
      </div>
      <span>
        ¿Ya tienes cuenta? <a href="#">Inicia sesion</a>
      </span>
    </div>
  );
};

export default RegisterUser;
