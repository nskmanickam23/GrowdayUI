import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const userSelectors = {
  getUser: (state) => state.users.getUser,
};

const getUser = createAsyncThunk("get/user", async (param) => {
  const token = getState()?.auth.token;
  const response = await api.user.getUser(param, token);
  console.log(response, "response for get user------");
  return response;
});

const editUser = createAsyncThunk("post/user/edit", async (userData) => {
  const token = getState()?.auth.token;
  const response = await api.user.editUser(userData, token);
  return response;
});

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message; // Set error message on rejection
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = ""; // Clear error on pending
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data; // Set user data from the payload
      })
      .addCase(editUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message; // Set error message on rejection
      });
  },
});

export const {
  /* Add any additional actions if needed */
} = userSlice.actions;

export { getUser, userSelectors, editUser };

export default userSlice.reducer;
