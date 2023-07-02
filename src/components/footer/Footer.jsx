import React from "react";
import styles from "./footer.module.scss";
import Logo from "../../images/icono luz final.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logo_footer}>
        <img className={styles.logo_footer_image} src={Logo} alt="logo" />
      </div>
      <div className={styles.social}>
        <FacebookIcon className={styles.icon_facebook} fontSize="large" />
        <InstagramIcon className={styles.icon_instagram} fontSize="large" />
      </div>
      <div className={styles.information}>
        <a href="#" className={styles.text_information}>
          Contacto
        </a>
        <a href="#" className={styles.text_information}>
          ¿Quien soy?
        </a>
        <a href="#" className={styles.text_information}>
          Politica de privacidad
        </a>
      </div>
    </div>
  );
};

export default Footer;
