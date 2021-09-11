/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  current: [],
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, action) => {
      state.all = [...state.all, action.payload];
      return state;
    },
    setmovie: (state, action) => {
      state.current = [action.payload];
      return state;
    },

  },
});

export const { addmovies, setmovie } = movies.actions;
export const info = (state) => state;
export default movies.reducer;
