import React, { useState } from "react";
import styles from "./course-list.module.scss";
import CreateCourse from "./course/CreateCourse";
import Button from "@mui/material/Button";
import IconLV from "../../images/icono luz final.png";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();

  const [courseCount, setCourseCount] = useState(1);
  const [courseComponents, setCourseComponents] = useState([
    <CreateCourse key={0} />,
  ]);

  const handleClick = () => {
    const newCourseCount = courseCount + 1;
    const newCourseComponents = [
      ...courseComponents,
      <CreateCourse key={newCourseCount} />,
    ];

    setCourseCount(newCourseCount);
    setCourseComponents(newCourseComponents);
  };

  const handleDelete = () => {
    if (courseComponents.length > 0) {
      setCourseComponents(courseComponents.slice(0, -1));
      setCourseCount(courseCount - 1);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img className={styles.icon} src={IconLV} alt="" />
          <h2 className={styles.name_page} onClick={() => navigate("/menu")}>
            Luz Vera
          </h2>
        </div>
      </div>
      <div className={styles.header_course}></div>
      <div className={styles.list_container}>
        {courseComponents.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
        <div className={styles.list_button}>
          <Button
            variant="outlined"
            color="primary"
            className={styles.input_button}
            onClick={handleClick}
          >
            + Añadir clase
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles.input_button}
            onClick={handleDelete}
          >
            Eliminar última clase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
