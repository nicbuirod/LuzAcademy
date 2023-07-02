import React, { useState, useRef, useEffect } from "react";
import styles from "./edit-course.module.scss";
import IconLV from "../../images/icono luz final.png";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    console.log(list);
  }, []);

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

  const videoPath = "/videos/video1.mp4";
  const handleClose = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img
            className={styles.icon}
            src={IconLV}
            alt=""
            onClick={() => navigate("/menu")}
          />
          <h2 className={styles.name_page} onClick={() => navigate("/menu")}>
            Luz Vera
          </h2>
        </div>
        <Button
          variant="outlined"
          color="primary"
          className={styles.exit_button}
          onClick={handleClose}
        >
          Cerrar sesión
        </Button>
      </div>
      {list.map(({ number, course, description, title, video, _id }, index) => {
        return (
          <div className={styles.course_container}>
            <div className={styles.title}>
              <TextField
                id="title"
                label="Nombre de la clase"
                variant="outlined"
                className={styles.input}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <TextField
                id="numberClass"
                label="Clase N°"
                variant="outlined"
                className={styles.input_number}
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
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
                  <textarea
                    className={styles.description_area}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <input
                  type="file"
                  name="file"
                  ref={fileInputRef}
                  onChange={(e) => uploadVIdeo(e.target.files)}
                  className={styles.file_input}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  className={styles.input_button}
                  type="button"
                  // onClick={() => {
                  //   insertVideo();
                  // }}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Cargar video
                </Button>
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                className={styles.input_button}
                type="submit"
                onClick={handleSave}
              >
                Guardar
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditCourse;
