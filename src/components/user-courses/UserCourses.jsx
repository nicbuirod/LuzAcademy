import React, { useEffect } from "react";
import styles from "./user-courses.module.scss";
import Button from "@mui/material/Button";
import IconLV from "../../images/icono luz final.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesByIds } from "../../services/courseAPI";
import { getAllClass } from "../../services/courseAPI";
import { useNavigate } from "react-router-dom";

const UserCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { coursesOfUser } = useSelector((state) => state.courses) || [];
  const { coursesByIds } = useSelector((state) => state.courses) || [];

  useEffect(() => {
    dispatch(getCoursesByIds(coursesOfUser));
    console.log("cursos", coursesOfUser);
  }, [dispatch]);

  const handleClass = (idCourse) => {
    dispatch(getAllClass(idCourse));
    navigate(`/class-user`);
  };

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img
            className={styles.icon}
            src={IconLV}
            alt=""
            onClick={() => navigate("/user-log")}
          />
          <h2
            className={styles.name_page}
            onClick={() => navigate("/user-log")}
          >
            Luz Vera
          </h2>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button_car}>
            <AddShoppingCartIcon />
          </button>

          <Button
            variant="outlined"
            className={styles.input_button}
            onClick={() => navigate("/user-log")}
          >
            Mas cursos
          </Button>
          <Button
            variant="outlined"
            className={styles.input_button}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Cerrar sesión
          </Button>
        </div>
      </div>
      <div className={styles.courses_container}>
        <h3>mis cursos</h3>
        <div className={styles.courses_lis}>
          {coursesByIds.map(({ _id, name }) => {
            return (
              <div className={styles.course_container}>
                <Button
                  variant="outlined"
                  className={styles.input_button}
                  onClick={() => handleClass(_id)}
                >
                  {name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.create_course}>
        <div className={styles.inputs_new_course}>
          <Button
            variant="outlined"
            color="primary"
            className={styles.create_button}
            onClick={() => navigate("/user-log")}
          >
            Ver mas cursos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCourses;
