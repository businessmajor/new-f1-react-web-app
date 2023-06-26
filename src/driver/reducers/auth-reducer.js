import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../../users/users-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, action) => {
     state.currentUser = action.payload;
     state.loading = false;
     state.error = null;
   },
   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
    state.loading = false;
    state.error = null;
  },
  [profileThunk.fulfilled]: (state, action) => {
    state.currentUser = action.payload;
    state.loading = false;
    state.error = null;
  },
  [updateUserThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
    state.loading = false;
    state.error = null;
  },
  [registerThunk.fulfilled]: (state, action) => {
    state.currentUser = action.payload;
    state.loading = false;
    state.error = null;
  },
 },
});
export default authSlice.reducer;