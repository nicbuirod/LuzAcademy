import { configureStore } from "@reduxjs/toolkit";

//reducers
import courses from "./slices/courses";
import courseClass from "./slices/courseClass";

export default configureStore({
  reducer: {
    courses,
    courseClass,
  },
});
