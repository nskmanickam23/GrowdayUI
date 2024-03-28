import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const userSelectors = {
  getUser: (state) => state.user.getUser,
};

const getUser = createAsyncThunk("get/user", async () => {
  const localToken = localStorage.getItem('token');
  console.log(localToken, "response for get user------");
  const response = await api.user.getUser(localToken);
  console.log(response, "response for get user------");
  return response;
});

const editUser = createAsyncThunk("post/user/edit", async (userData) => {
  const token = getState()?.auth.token;
  const response = await api.user.editUser(userData, token);
  return response;
});

const initialState = {
  getUser: {
    loading: false,
    data: {},
    error: "",
  },
  editUser: {
    loading: false,
    data: {},
    error: "",
  }

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.getUser.loading = true;
        state.getUser.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.getUser.loading = false;
        state.getUser.data = payload?.data;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.getUser.loading = false;
        state.getUser.error = error.message; // Set error message on rejection
      })
      .addCase(editUser.pending, (state) => {
        state.editUser.loading = true;
        state.editUser.error = "";
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.editUser.loading = false;
        state.editUser.data = payload?.data;
      })
      .addCase(editUser.rejected, (state, { error }) => {
        state.editUser.loading = false;
        state.editUser.error = error.message; // Set error message on rejection
      })

  },
});

export const {
  /* Add any additional actions if needed */
} = userSlice.actions;

export { getUser, userSelectors, editUser };

export default userSlice.reducer;
