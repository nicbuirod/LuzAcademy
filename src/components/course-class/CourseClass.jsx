import React, { useState, useRef, useEffect } from "react";
import styles from "./edit-course.module.scss";

import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconLV from "../../images/icono luz final.png";

const CourseClass = () => {
  const [video, setVideo] = useState(null);
  const [videoName, setVideoName] = useState("");

  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null);

  const { list } = useSelector((state) => state.courseClass) || [];

  const uploadVIdeo = (e) => {
    setVideo(e);
  };

  useEffect(() => {
    console.log(list);
  }, []);

  const navigate = useNavigate();

  const insertVideo = async () => {
    const f = new FormData();
    f.append("file", video[0]);
    //f.append("files", video);
    // Comprobar si el archivo se ha agregado correctamente
    if (f.get("file") !== null) {
      console.log("Archivo agregado correctamente:", f.get("file"));
    } else {
      console.log("No se ha agregado ningún archivo.");
    }
    console.log(f);
    await axios
      .post("http://localhost:4000/videos", f)
      .then((response) => {
        console.log(response.data);
        setVideoName(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSave = () => {
    insertVideo();
    // newClass(number, title, description);
  };
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleClose = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleCoursesUser = () => {
    navigate("/user-courses");
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
      {list.map(({ number, course, description, title, video, _id }, index) => {
        return (
          <div className={styles.course_container}>
            <div className={styles.title}>
              <h2>{title}</h2>

              <h2>Clase N° {number}</h2>
            </div>
            <div className={styles.information_container}>
              <div className={styles.video}>
                <ReactPlayer
                  url={`/videos/${video}`}
                  controls
                  className={styles.video_player}
                />
              </div>
              <div className={styles.description}>
                <div className={styles.container_description}>
                  <h3>Descripción de la clase</h3>

                  <p>{description}</p>
                </div>
                <input
                  type="file"
                  name="file"
                  ref={fileInputRef}
                  onChange={(e) => uploadVIdeo(e.target.files)}
                  className={styles.file_input}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseClass;
