/** @format */

import { configureStore } from "@reduxjs/toolkit";
import movies from "./reducer";

const store = configureStore({ reducer: movies });

export default store;
