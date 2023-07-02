import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";

import {
  Loby,
  Login,
  NewCourse,
  Register,
  Menu,
  LobyUserLog,
  CoursesUser,
  EditCoursePage,
  ClassUser,
  PayResponse,
} from "../pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Loby />,
    errorElement: <div>Hubo un error</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/new-course",
    element: <NewCourse />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/user-log",
    element: <LobyUserLog />,
  },
  {
    path: "/user-courses",
    element: <CoursesUser />,
  },
  {
    path: "/edit-course",
    element: <EditCoursePage />,
  },
  {
    path: "/class-user",
    element: <ClassUser />,
  },
]);

const CustomRouter = () => <RouterProvider router={router} />;

export { CustomRouter };
