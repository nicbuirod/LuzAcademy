import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import styles from "./create-course.module.scss";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import axios from "axios";
import { newClass } from "../../../services/courseAPI";

import { useSelector } from "react-redux";

const CreateCourse = () => {
  const [video, setVideo] = useState(null);
  const [videoName, setVideoName] = useState("");

  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { idCourse } = useSelector((state) => state.courseClass) || "";

  const fileInputRef = useRef(null);

  const uploadVIdeo = (e) => {
    setVideo(e);
  };

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

  const handleSave = async () => {
    await insertVideo();
    // console.log(videoName);
    // console.log("id de curso", idCourse);
    // newClass(number, title, description, idCourse, videoName);
  };

  useEffect(() => {
    if (videoName !== "") {
      console.log(videoName);
      console.log("id de curso", idCourse);
      newClass(number, title, description, idCourse, videoName);
    }
  }, [videoName]);
  const handleClick = () => {
    fileInputRef.current.click();
  };

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
            url={
              video && video.length > 0 ? URL.createObjectURL(video[0]) : "#"
            }
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
};

export default CreateCourse;
