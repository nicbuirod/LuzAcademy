import React from "react";

import { HeaderApp } from "../components/header";
import { Body } from "../components/bodyLoby";
import { Footer } from "../components/footer";

import styles from "./pages.module.scss";

const Loby = () => {
  return (
    <div className={styles.width}>
      <HeaderApp />
      <Body />
      <Footer />
    </div>
  );
};

export default Loby;
