import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const businessSelectors = {
  getBusinesses: (state) => state.business.getBusinesses,
  saveBusiness: (state) => state.business.saveBusiness,
  editBusiness: (state) => state.business.editBusiness,
  fetchBusinessById: (state) => state.business.fetchBusinessById,
};

// use the token from local storage to avoid referesh on every render
// if token needs to be taken from the state  use       const token = getState()?.auth.token;


const getBusinesses = createAsyncThunk(
  "get/businesses",
  async (param, { getState }) => {
    const localToken = localStorage.getItem('token');
    const token = getState()?.auth.token;
    const response = await api.business.getBusinesses(param, localToken);
    return response;
  }
);

const saveBusiness = createAsyncThunk(
  "post/business/details",
  async (param) => {
    const localToken = localStorage.getItem('token');
    const response = await api.business.saveBusiness(param, localToken);
    return response;
  }
);

const editBusiness = createAsyncThunk(
  "post/business/edit",
  async (businessData) => {
    console.log(businessData, "data is here----");
    const localToken = localStorage.getItem('token');
    const response = await api.business.editBusiness(businessData, localToken);
    return response;
  }
);

const acitvateAndDeactivateBusiness = createAsyncThunk(
  "post/business/disable",
  async (status) => {
    console.log(status, "at reducer");
    const token = getState()?.auth.token;
    const localToken = localStorage.getItem('token');
    const response = await api.business.changeBusinessStatus(status, localToken);
    return response;
  }
);

const fetchBusinessById = createAsyncThunk(
  "business/fetchSingle",
  async (businessId) => {
    const localToken = localStorage.getItem('token');
    const response = await api.business.getBusinessByID(businessId, localToken);
    console.log(response.data, "---------from select single business reducer");
    return response.data; // Assuming response.data contains the business data
  }
);





const initialState = {
  getBusinesses: {
    loading: false,
    data: {},
    error: "",
  },
  editBusiness: {
    loading: false,
    data: {},
    error: "",
  },
  saveBusiness: {
    loading: false,
    data: {},
    error: "",
  },
  selectedBusiness: {
    loading: false,
    data: {},
    error: "",
  },
  fetchBusinessById: {
    loading: false,
    data: {},
    error: "",
  }
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinesses.pending, (state) => {
        state.getBusinesses.loading = true;
        state.error = initialState.error;
      })
      .addCase(getBusinesses.fulfilled, (state, { payload }) => {
        state.getBusinesses.loading = false;
        state.getBusinesses.data = payload?.data;
      })
      .addCase(getBusinesses.rejected, (state, { error }) => {
        state.getBusinesses.loading = false;
        state.getBusinesses.error = error.message;
      })
      .addCase(saveBusiness.pending, (state) => {
        state.saveBusiness.loading = true;
        state.saveBusiness.error = initialState.error;
      })
      .addCase(saveBusiness.fulfilled, (state, { payload }) => {
        state.saveBusiness.loading = false;
        state.saveBusiness.data = payload?.data;
      })
      .addCase(saveBusiness.rejected, (state, { error }) => {
        state.saveBusiness.loading = false;
        state.saveBusiness.error = error.message;
      })
      .addCase(editBusiness.pending, (state) => {
        state.editBusiness.loading = true;
        state.editBusiness.error = initialState.error;
      })
      .addCase(editBusiness.fulfilled, (state, { payload }) => {
        state.editBusiness.loading = false;
        state.editBusiness.data = payload?.data;
      })
      .addCase(editBusiness.rejected, (state, { error }) => {
        state.editBusiness.loading = false;
        state.editBusiness.error = error.message;
      })
      .addCase(fetchBusinessById.pending, (state) => {
        state.fetchBusinessById.loading = true;
        state.fetchBusinessById.error = initialState.error;
      })
      .addCase(fetchBusinessById.fulfilled, (state, { payload }) => {
        state.fetchBusinessById.loading = false;
        state.fetchBusinessById.data = payload;
      })
      .addCase(fetchBusinessById.rejected, (state, { error }) => {
        state.fetchBusinessById.loading = false;
        state.fetchBusinessById.error = error.message;
      });

  },
});

export const {
  /* Add any additional actions if needed */
} = businessSlice.actions;

export { getBusinesses, saveBusiness, businessSelectors, editBusiness, acitvateAndDeactivateBusiness, fetchBusinessById };

export default businessSlice.reducer;
