import React from "react";

import { LoginUser } from "../components/Login";
import { HeaderApp } from "../components/header";
import { Footer } from "../components/footer";

import styles from "./pages.module.scss";

const Login = () => {
  return (
    <div className={styles.principal}>
      <HeaderApp />
      <LoginUser />
      <Footer />
    </div>
  );
};

export default Login;
