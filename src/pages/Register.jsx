import React from "react";

import { HeaderApp } from "../components/header";
import { Footer } from "../components/footer";
import { RegisterUser } from "../components/Register";
import styles from "./pages.module.scss";

const Register = () => {
  return (
    <div className={styles.principal}>
      <HeaderApp />
      <RegisterUser />
      <Footer />
    </div>
  );
};

export default Register;
