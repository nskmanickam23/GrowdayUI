import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const businessSelectors = {
  businessRegister: (state) => state.business.registerBusiness,
  getBusinesses: (state) => state.business.getBusinesses,
};

const getBusinesses = createAsyncThunk(
  "get/businesses",
  async (param, { getState }) => {
    const localToken = localStorage.getItem('token');
    const token = getState()?.auth.token;
    // console.log("111", getState()?.auth.token);
    const response = await api.business.getBusinesses(param, localToken);
    return response;
  }
);

const saveBusiness = createAsyncThunk(
  "post/business/details",
  async (param) => {
    const token = getState()?.auth.token;
    const response = await api.business.saveBusiness(param, token);
    return response;
  }
);

const editBusiness = createAsyncThunk(
  "post/business/edit",
  async (businessData) => {
    const token = getState()?.auth.token;
    const response = await api.business.editBusiness(businessData, token);
    return response;
  }
);

const acitvateAndDeactivateBusiness = createAsyncThunk(
  "post/business/disable",
  async (status) => {
    console.log(status, "at reducer");
    const token = getState()?.auth.token;
    const response = await api.business.changeBusinessStatus(status, token);
    return response;
  }
);

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinesses.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(getBusinesses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(getBusinesses.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(saveBusiness.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(saveBusiness.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(saveBusiness.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const {
  /* Add any additional actions if needed */
} = businessSlice.actions;

export { getBusinesses, saveBusiness, businessSelectors, editBusiness, acitvateAndDeactivateBusiness };

export default businessSlice.reducer;
