import { createSlice } from "@reduxjs/toolkit";

export const courseClassSlice = createSlice({
  name: "courseClass",
  initialState: {
    list: [],
    idCourse: "",
  },
  reducers: {
    setCourseClassState: (state, action) => {
      state.list = action.payload;
    },
    setIdCourseState: (state, action) => {
      state.idCourse = action.payload;
    },
  },
});

export const { setCourseClassState } = courseClassSlice.actions;
export const { setIdCourseState } = courseClassSlice.actions;

export default courseClassSlice.reducer;
