import React, { useEffect } from "react";
import styles from "./body.module.scss";
import Photo from "../../images/luz.jpeg";
import { Slider } from "../slider";
import { getAllCourses } from "../../services/courseAPI";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const { list } = useSelector((state) => state.courses) || [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className={styles.body_container}>
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
              <div className={styles.one_course} onClick={handleClick}>
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

export default Body;
