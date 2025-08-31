import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    getJobs: () => {
      const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      return storedJobs;
    },

    addJob: (state, action) => {
      state = JSON.parse(localStorage.getItem("jobs")) || [];
      state.push(action.payload);
      localStorage.setItem("jobs", JSON.stringify(state));
    },

    removeJob: (state, action) => {
      const newState = state.filter((job) => job.id !== action.payload);
      localStorage.setItem("jobs", JSON.stringify(newState));
      return newState;
    },

    editJob: (state, action) => {
      const index = state.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("jobs", JSON.stringify(state));
      }
    },

    getJobById: (state, actions) => {
      const job = state.find((e) => e.id == actions.payload);
      return job;
    },
  },
});

export const { addJob, getJobs, editJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;
