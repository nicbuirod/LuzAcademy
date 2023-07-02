import axios from "axios";
import { setCoursesState } from "../store/slices/courses";
import { setCourseClassState } from "../store/slices/courseClass";
import { setIdCourseState } from "../store/slices/courseClass";
import { setCourseByIdState } from "../store/slices/courses";
import { setCoursesOfUser } from "../store/slices/courses";
import { setCoursesByIdsState } from "../store/slices/courses";

export const newClass = async (
  number,
  title,
  description,
  idCourse,
  videoName
) => {
  const token = localStorage.getItem("token");
  try {
    await axios.post(
      "http://localhost:4000/class",
      {
        number: +number,
        title: title,
        video: videoName,
        description: description,
        course: idCourse,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const newCourse = async (name, price, dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://localhost:4000/course",
      {
        name: name,
        price: +price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data._id);
    dispatch(setIdCourseState(response.data._id));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCourses = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    await axios
      .get(`http://localhost:4000/course`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        dispatch(setCoursesState(data.data));
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (nameUpdate, priceUpdate, idCourse) => {
  const id = idCourse;
  const token = localStorage.getItem("token");
  try {
    await axios.put(
      `http://localhost:4000/course/${id}`,
      {
        name: nameUpdate,
        price: priceUpdate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllClass = (idCourse) => async (dispatch) => {
  const id = idCourse;
  const token = localStorage.getItem("token");
  try {
    await axios
      .get(`http://localhost:4000/class/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        dispatch(setCourseClassState(data.data));
      });
  } catch (error) {
    console.log(error);
  }
};

export const newUser = async (email, password) => {
  try {
    await axios
      .post("http://localhost:4000/user", {
        email: email,
        password: password,
        admin: false,
      })
      .then(alert("usuario creado, ya puedes iniciar sesión"));
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de error
      if (error.response.status === 400) {
        // Mostrar mensaje de error en un alert
        alert(error.response.data.error);
      } else {
        alert("Error de servidor");
      }
    } else {
      // Error de conexión o error desconocido
      alert("Error en la solicitud");
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/user/login", {
      email: email,
      password: password,
    });

    const token = response.data.token;
    const admin = response.data.admin;
    const idUser = response.data.code;
    localStorage.setItem("token", token);
    localStorage.setItem("admin", admin);
    localStorage.setItem("idUser", idUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (idCourse) => {
  const token = localStorage.getItem("token");
  const id = idCourse;

  try {
    await axios.delete(`http://localhost:4000/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//course by id

export const getCourseById = (idCourse) => async (dispatch) => {
  const id = idCourse;
  const token = localStorage.getItem("token");
  try {
    await axios
      .get(`http://localhost:4000/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        dispatch(setCourseByIdState(data.data));
      });
  } catch (error) {
    console.log(error);
  }
};

export const addUserCourse = async (idUser, courseId) => {
  const userId = idUser;
  const newCourse = courseId;
  const token = localStorage.getItem("token");
  try {
    await axios.put(
      `http://localhost:4000/user/${userId}`,
      {
        course: newCourse,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//get courses of user

export const getCoursesOfUser = (idUser) => async (dispatch) => {
  const id = idUser;
  const token = localStorage.getItem("token");
  console.log("en courses user");
  try {
    await axios
      .get(`http://localhost:4000/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        dispatch(setCoursesOfUser(data.data));
      });
  } catch (error) {
    console.log(error);
  }
};

//courses by ids

export const getCoursesByIds = (ids) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const requests = ids.map((id) =>
    axios.get(`http://localhost:4000/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
  console.log("antes de try");
  try {
    const responses = await axios.all(requests);
    console.log(responses);
    const courses = responses.map((response) => response.data);
    dispatch(setCoursesByIdsState(courses));
    console.log("api cursos", courses);
  } catch (error) {
    console.log(error);
  }
};
