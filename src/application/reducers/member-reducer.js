import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const memberSelectors = {
  fetchMember: (state) => state.members.getMember,
  registerMember: (state) => state.members.registerMember,
  editMember: (state) => state.members.editMember,
};

const fetchMember = createAsyncThunk("get/members", async (param,) => {
  // const token = thunkAPI.getState()?.auth.token;
  const localtoken = localStorage.getItem("token");
  const response = await api.members.fetchMember(param,localtoken);
  console.log(response, "response");
  return response;
});

const registerMember = createAsyncThunk(
  "post/member",
   async (memberData,thunkAPI) => {
    const token = thunkAPI.getState()?.auth.token;
    const response = await api.members.saveMember(memberData,token);
    return response;
});

const editMember = createAsyncThunk(
  "post/member/edit",
   async (memberData,thunkAPI) => {
    const token = thunkAPI.getState()?.auth.token;
    const response = await api.members.editMember(memberData,token);
    return response;
});
const initialState = {
  
    loading: false,
    data: [],
    error: "",
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMember.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(fetchMember.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(fetchMember.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(registerMember.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(registerMember.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(registerMember.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(editMember.pending, (state) => {
        state.loading = true;
        state.error = initialState.error;
      })
      .addCase(editMember.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload?.data;
      })
      .addCase(editMember.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

const membersActions = membersSlice.actions;
export {
  memberSelectors,
  fetchMember,
  registerMember,
  editMember,
  membersActions,
};
export default membersSlice.reducer;