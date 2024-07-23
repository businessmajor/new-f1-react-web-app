import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../users/users-reducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
