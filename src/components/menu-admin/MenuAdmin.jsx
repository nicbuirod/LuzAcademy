import React, { useEffect, useState } from "react";
import styles from "./menu-admin.module.scss";
import IconLV from "../../images/icono luz final.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { newCourse } from "../../services/courseAPI";
import { getAllCourses } from "../../services/courseAPI";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../services/courseAPI";
import { useNavigate } from "react-router-dom";
import { getAllClass } from "../../services/courseAPI";
import { deleteCourse } from "../../services/courseAPI";

const MenuAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);

  const [editIndex, setEditIndex] = useState(null);
  const [edit, setEdit] = useState(false);

  const [nameUpdate, setNameUpdate] = useState(null);
  const [priceUpdate, setPriceUpdate] = useState(null);

  const { list } = useSelector((state) => state.courses) || [];

  const handleClick = async () => {
    await newCourse(name, price, dispatch);
    // dispatch(setIdCourseState());
    dispatch(getAllCourses());
    navigate("/new-course");
  };
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEdit(true);
  };

  const handleUpdate = async (idCourse) => {
    await updateCourse(nameUpdate, priceUpdate, idCourse);
    dispatch(getAllCourses());
    setEdit(false);
  };

  const handleClass = (idCourse) => {
    dispatch(getAllClass(idCourse));
    navigate(`/edit-course`);
  };

  const handleDelete = async (idcourse) => {
    await deleteCourse(idcourse);
    dispatch(getAllCourses());
  };
  const handleClose = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={styles.container_menu}>
      <div className={styles.background_color}>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <img className={styles.icon} src={IconLV} alt="" />
            <h2 className={styles.name_page}>Luz Vera</h2>
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

        <div className={styles.courses_container}>
          <h3>cursos</h3>
          <div className={styles.header_table}>
            <tr>
              <th className={styles.td_name}>Nombre del curso</th>
              <th className={styles.td_price}>Precio</th>
              <th className={styles.td_edit}>Editar</th>
              <th className={styles.td_class}>Ver clases</th>
              <th className={styles.td_delete}>Eliminar</th>
            </tr>
          </div>
          <div className={styles.courses_lis}>
            {list.map(({ name, price, _id }, index) => {
              return (
                <tr key={index}>
                  <td className={styles.td_name}>{name}</td>
                  <td className={styles.td_price}>{price}</td>
                  <td className={styles.td_edit}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        handleEdit(index);
                      }}
                    >
                      Editar
                    </Button>
                  </td>

                  {editIndex === index && edit && (
                    <div className={styles.edit_container}>
                      <p>Nombre</p>

                      <input
                        type="text"
                        value={nameUpdate}
                        onChange={(e) => {
                          setNameUpdate(e.target.value);
                        }}
                      />
                      <p>Precio</p>
                      <input
                        type="number"
                        value={priceUpdate}
                        onChange={(e) => {
                          setPriceUpdate(e.target.value);
                        }}
                      />

                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleUpdate(_id)}
                      >
                        Actualizar
                      </Button>
                    </div>
                  )}
                  <td className={styles.td_class}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClass(_id)}
                    >
                      Ver clases
                    </Button>
                  </td>
                  <td className={styles.td_delete}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleDelete(_id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>

        <div className={styles.create_course}>
          <h3>Crear un nuevo curso</h3>
          <div className={styles.inputs_new_course}>
            <TextField
              id="curso"
              label="Nombre del curso"
              variant="outlined"
              value={name}
              className={styles.input_course}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="price"
              label="precio"
              variant="outlined"
              type="number"
              className={styles.input_course_price}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              color="primary"
              className={styles.create_button}
              onClick={handleClick}
            >
              Crear curso
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAdmin;
