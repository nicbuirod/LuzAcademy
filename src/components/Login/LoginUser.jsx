import React, { useState } from "react";
import styles from "./login-user.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/courseAPI";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginUser(email, password);
    const admin = localStorage.getItem("admin") === "true";
    if (admin) {
      navigate("/menu");
    } else {
      navigate("/user-log");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_container_input}>
        <h2>Inicia sesión</h2>
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          className={styles.input_button}
          onClick={handleLogin}
        >
          Iniciar sesión
        </Button>
        <a href="#">¿Has olvidado la contraseña?</a>
      </div>
      <span>
        ¿No tienes cuenta? <a href="#">Registrate</a>
      </span>
    </div>
  );
};

export default LoginUser;
