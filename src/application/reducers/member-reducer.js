import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/axios";

const memberSelectors = {
  fetchMember: (state) => state.members.fetchMember,
  registerMember: (state) => state.members.registerMember,
  editMember: (state) => state.members.editMember,
};

const fetchMember = createAsyncThunk("get/members", async (param, { getState }) => {
  const token = getState()?.auth.token;
  const localtoken = localStorage.getItem("token");
  const response = await api.members.fetchMember(param, localtoken);
  console.log(response, "response");
  return response;
});

const registerMember = createAsyncThunk(
  "post/member",
  async (memberData, { getState }) => {
    const token = getState()?.auth.token;
    const localtoken = localStorage.getItem("token");
    const response = await api.members.saveMember(memberData, localtoken);
    return response;
  }
);

const editMember = createAsyncThunk(
  "post/member/edit",
  async (memberData, { getState }) => {
    const token = getState()?.auth.token;
    const localtoken = localStorage.getItem("token");
    const response = await api.members.editMember(memberData, localtoken);
    return response;
  }
);

const initialState = {
  fetchMember: {
    loading: false,
    data: [],
    error: "",
  },
  registerMember: {
    loading: false,
    data: [],
    error: "",
  },
  editMember: {
    loading: false,
    data: [],
    error: "",
  },
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMember.pending, (state) => {
        state.fetchMember.loading = true;
        state.fetchMember.error = initialState.error;
      })
      .addCase(fetchMember.fulfilled, (state, { payload }) => {
        state.fetchMember.loading = false;
        state.fetchMember.data = payload?.data;
      })
      .addCase(fetchMember.rejected, (state, { error }) => {
        state.fetchMember.loading = false;
        state.fetchMember.error = error.message;
      })
      .addCase(registerMember.pending, (state) => {
        state.registerMember.loading = true;
        state.registerMember.error = initialState.error;
      })
      .addCase(registerMember.fulfilled, (state, { payload }) => {
        state.registerMember.loading = false;
        state.registerMember.data = payload?.data;
      })
      .addCase(registerMember.rejected, (state, { error }) => {
        state.registerMember.loading = false;
        state.registerMember.error = error.message;
      })
      .addCase(editMember.pending, (state) => {
        state.editMember.loading = true;
        state.editMember.error = initialState.error;
      })
      .addCase(editMember.fulfilled, (state, { payload }) => {
        state.editMember.loading = false;
        state.editMember.data = payload?.data;
      })
      .addCase(editMember.rejected, (state, { error }) => {
        state.editMember.loading = false;
        state.editMember.error = error.message;
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
