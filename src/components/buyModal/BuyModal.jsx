import React from "react";
import styles from "./buy-modal.module.scss";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { setModalState } from "../../store/slices/courses";
import { addUserCourse } from "../../services/courseAPI";
import { ButtonPay } from "../buttonPay";

const BuyModal = () => {
  const dispatch = useDispatch();

  const { courseById } = useSelector((state) => state.courses) || {};

  const handleClose = () => {
    dispatch(setModalState(false));
  };
  const idUSer = localStorage.getItem("idUser");
  const handleBuy = () => {
    addUserCourse(idUSer, courseById._id);
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.window_modal}>
        <div className={styles.close_button}>
          <button onClick={handleClose}>X</button>
        </div>
        <div className={styles.left}>
          <h2>{courseById.name}</h2>

          <p>{courseById.price}</p>
          <Button
            variant="outlined"
            className={styles.input_button}
            onClick={handleBuy}
          >
            Comprar
          </Button>
          <ButtonPay />
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
