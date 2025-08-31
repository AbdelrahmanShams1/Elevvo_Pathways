import { configureStore } from "@reduxjs/toolkit";
import jobs from "./Slices/jobSlice.jsx";

export const store = configureStore({
  reducer: {
    jobs: jobs,
  },
});
