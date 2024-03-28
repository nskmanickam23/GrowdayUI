import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const customerSelectors = {
  getAllCustomers: (state) => state.customers.getAllCustomers,
  addNewCustomer: (state) => state.customers.addNewCustomer,
  editCustomer:(state)=>state.customers.editCustomer,
};

const getAllCustomers = createAsyncThunk(
  "get/customers",
  async () => {
    console.log("this has been called");
    const localToken = localStorage.getItem('token');
    const response = await api.customers.getCutomers(localToken);
    return response;
  });

const addNewCustomer = createAsyncThunk(
  "post/customers/add",
  async (customerData) => {
    console.log(customerData, "----");
    const response = await api.customers.saveCusomer(customerData);
    return response;
  }
);

const editCustomer = createAsyncThunk(
  "post/customers/edit",
  async (customerData) => {
    console.log(customerData,"=====cusomer data from edit reducer....");
    const localToken = localStorage.getItem('token');
    const response = await api.customers.editCustomer(customerData, localToken);
    return response;
  }
);

const initialState = {
  getAllCustomers: {
    loading: false,
    data: {},
    error: "",
  },
  addNewCustomer: {
    loading: false,
    data: {},
    error: "",
  },
  editCustomer: {
    loading: false,
    data: {},
    error: "",
  }
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomers.pending, (state) => {
        state.getAllCustomers.loading = true;
        state.getAllCustomers.error = initialState.error;
      })
      .addCase(getAllCustomers.fulfilled, (state, { payload }) => {
        state.getAllCustomers.loading = false;
        state.getAllCustomers.data = payload?.data;
      })
      .addCase(getAllCustomers.rejected, (state, { error }) => {
        state.getAllCustomers.loading = false;
        state.getAllCustomers.error = error.message;
      })
      .addCase(addNewCustomer.pending, (state) => {
        state.addNewCustomer.loading = true;
        state.addNewCustomer.error = initialState.error;
      })
      .addCase(addNewCustomer.fulfilled, (state, { payload }) => {
        state.addNewCustomer.loading = false;
        state.addNewCustomer.data = payload?.data;
      })
      .addCase(addNewCustomer.rejected, (state, { error }) => {
        state.addNewCustomer.loading = false;
        state.addNewCustomer.error = error.message;
      })
      .addCase(editCustomer.pending, (state) => {
        state.editCustomer.loading = true;
        state.editCustomer.error = initialState.error;
      })
      .addCase(editCustomer.fulfilled, (state, { payload }) => {
        state.editCustomer.loading = false;
        state.editCustomer.data = payload?.data;
      })
      .addCase(editCustomer.rejected, (state, { error }) => {
        state.editCustomer.loading = false;
        state.editCustomer.error = error.message;
      })
  },
});

export const {
  /* Add any additional actions if needed */
} = customersSlice.actions;

export { getAllCustomers, addNewCustomer, customerSelectors, editCustomer };

export default customersSlice.reducer;
