import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    courseById: {},
    modalClose: false,
    coursesOfUser: [],
    coursesByIds: [],
  },
  reducers: {
    setCoursesState: (state, action) => {
      state.list = action.payload;
    },
    setCourseByIdState: (state, action) => {
      state.courseById = action.payload;
    },
    setModalState: (state, action) => {
      state.modalClose = action.payload;
    },
    setCoursesOfUser: (state, action) => {
      state.coursesOfUser = action.payload;
    },
    setCoursesByIdsState: (state, action) => {
      state.coursesByIds = action.payload;
    },
  },
});

export const { setCoursesState } = coursesSlice.actions;
export const { setCourseByIdState } = coursesSlice.actions;
export const { setModalState } = coursesSlice.actions;
export const { setCoursesOfUser } = coursesSlice.actions;
export const { setCoursesByIdsState } = coursesSlice.actions;

export default coursesSlice.reducer;
