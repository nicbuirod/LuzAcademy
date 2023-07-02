import React, { useEffect, useState } from "react";
import styles from "./button-pay.module.scss";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addUserCourse } from "../../services/courseAPI";

const ButtonPay = () => {
  const { courseById } = useSelector((state) => state.courses) || {};
  const idUSer = localStorage.getItem("idUser");

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");

  // useEffect(() => {
  //   setName(courseById.name);
  //   setPrice(courseById.price);
  // }, []);

  const name = courseById.name;
  const price = courseById.price;
  console.log(name);
  // eslint-disable-next-line no-undef
  const handler = ePayco.checkout.configure({
    key: "f9a1fb0e06e4fa1005b54e654c2089b4",
    test: true,
  });
  const handlePay = () => {
    handler.open(data);
    addUserCourse(idUSer, courseById._id);
  };

  const data = {
    //Parametros compra (obligatorio)
    name: name,
    description: name,
    invoice: "1234567563424",
    currency: "cop",
    amount: price,
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",

    //Onpage="false" - Standard="true"
    external: "false",

    //atributo deshabilitación metodo de pago
    //methodsDisable: ["TDC", "PSE", "SP", "CASH", "DP"],
  };

  window.addEventListener("checkout_response", function (event) {
    console.log("respuesta del pago");
    var response = event.detail;
    console.log(response); // Aquí puedes ver la respuesta en la consola

    // Almacena la respuesta en una variable o realiza las acciones que necesites
    var pagoExitoso = response.status === "Aceptada";
    console.log("Pago exitoso:", pagoExitoso);
  });

  return (
    <Button
      variant="outlined"
      color="secondary"
      //className={styles.input_button}
      type="submit"
      // onClick={() => {
      //   insertVideo();
      // }}
      onClick={() => {
        handlePay();
      }}
    >
      Comprar curso
    </Button>
  );
};

export default ButtonPay;
