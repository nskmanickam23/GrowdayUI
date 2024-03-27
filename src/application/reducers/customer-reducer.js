import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const customerSelectors = {
  getAllCustomers: (state) => state.customers.getAllCustomers,
};

const getAllCustomers = createAsyncThunk("get/customers", async (param) => {
  const token = getState()?.auth.token;
  const response = await api.customers.getCutomers(param, token);
  console.log(response, "response----------------------");
  return response;
});

const addNewCustomer = createAsyncThunk(
  "post/customer/add",
  async (customerData) => {
    const token = getState()?.auth.token;
    const response = await api.customers.saveCusomer(customerData, token);
    return response;
  }
);

const editCustomer = createAsyncThunk(
  "post/customer/edit",
  async (customerData) => {
    const token = getState()?.auth.token;
    const response = await api.customers.editCustomer(customerData, token);
    return response;
  }
);

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomers.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(getAllCustomers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(getAllCustomers.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(addNewCustomer.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(addNewCustomer.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(addNewCustomer.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(editCustomer.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(editCustomer.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(editCustomer.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const {
  /* Add any additional actions if needed */
} = customersSlice.actions;

export { getAllCustomers, addNewCustomer, customerSelectors, editCustomer };

export default customersSlice.reducer;
