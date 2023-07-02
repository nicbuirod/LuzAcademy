import React, { useEffect, useState } from "react";
import styles from "./loby-user.module.scss";
import Photo from "../../images/luz.jpeg";
import { Slider } from "../slider";
import Button from "@mui/material/Button";
import IconLV from "../../images/icono luz final.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../../services/courseAPI";
import { BuyModal } from "../buyModal";
import { getCourseById } from "../../services/courseAPI";
import courses, { setModalState } from "../../store/slices/courses";
import { getCoursesOfUser } from "../../services/courseAPI";
import { getCoursesByIds } from "../../services/courseAPI";

const LobyUser = () => {
  const { list } = useSelector((state) => state.courses) || [];
  const { modalClose } = useSelector((state) => state.courses) || false;
  const { coursesOfUser } = useSelector((state) => state.courses) || [];

  const idUSer = localStorage.getItem("idUser");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getCoursesOfUser(idUSer));
  }, []);

  const handleClose = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleCourse = (id) => {
    dispatch(setModalState(true));
    dispatch(getCourseById(id));
  };

  const handleCoursesUser = () => {
    navigate("/user-courses");
  };
  return (
    <div className={styles.body_container}>
      {modalClose && <BuyModal />}
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img className={styles.icon} src={IconLV} alt="" />
          <h2 className={styles.name_page}>Luz Vera</h2>
        </div>
        <div className={styles.header_right}>
          <h3>Bienvenido</h3>
          <div className={styles.buttons}>
            <button className={styles.button_car}>
              <AddShoppingCartIcon />
            </button>

            <Button
              variant="outlined"
              className={styles.input_button}
              onClick={handleCoursesUser}
            >
              Mis cursos
            </Button>
            <Button
              variant="outlined"
              className={styles.input_button}
              onClick={handleClose}
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.general}>
        <div className={styles.title}>
          <h3 className={styles.text_title}>
            Lorem ipsum dolor, sit amet consectetur
          </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            explicabo placeat soluta, in quo provident magni autem fugit dolorum
            laboriosam labore quidem? Dolor sapiente maxime mollitia autem
            eligendi vel repudiandae.
          </p>
        </div>
        <div className={styles.picture}>
          <img className={styles.picture_person} src={Photo} alt="Luz" />
        </div>
      </div>
      <div className={styles.menu}>
        <Slider />
      </div>
      <div className={styles.courses_available}>
        <h2>Cursos disponibles</h2>
        <div className={styles.list_courses}>
          {list.map(({ name, _id }, index) => {
            return (
              <div
                className={styles.one_course}
                onClick={() => handleCourse(_id)}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.information}>
        <p className={styles.objetive}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          quisquam delectus, doloremque ullam nemo dicta officia voluptatem
          nobis quo reiciendis facere blanditiis odit, asperiores totam facilis
          aliquam velit saepe minus! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Atque, eveniet vitae asperiores maiores consequatur
          sunt quisquam laudantium laborum! Vero sapiente quos ratione aliquam
          architecto rerum est corporis ipsa laborum consectetur.
        </p>
      </div>
    </div>
  );
};

export default LobyUser;
