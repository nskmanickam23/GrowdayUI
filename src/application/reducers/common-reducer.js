import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const commonSelectors = {
  isSideBarOpen: (state) => state.common.sideBar,
};

const initialState = {
  sideBar: true,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateSideBar: (state, action) => {
      state.sideBar = action.payload;
    },
  },
  //   extraReducers: {},
});

const commonActions = commonSlice.actions;

export { commonActions, commonSelectors };

export default commonSlice.reducer;
