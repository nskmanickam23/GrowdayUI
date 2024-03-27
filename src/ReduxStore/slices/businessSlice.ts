import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const incrementBy = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number) => {
    const response = await userId;
    return response;
  }
);

const buisnessSelectors = {
  buissnessData: (state: any) => state.business.businessData,
};

const initialState = {
  businessData: {
    data: {},
    fetch: false,
    error: "",
  },
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    addBusiness: (state, action) => {
      state.businessData = { ...state.businessData, ...action.payload };
      console.log(state.businessData, "state.businesses businesses added");
    },
    updateBusiness: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy.pending, (state) => {
        state.businessData.fetch = true;
        state.businessData.error = initialState.businessData.error;
      })
      .addCase(incrementBy.fulfilled, (state, { payload }) => {
        state.businessData.fetch = false;
        // state.businessData.data = payload.data;
        state.businessData.error = initialState.businessData.error;
      })
      .addCase(incrementBy.rejected, (state, { error }) => {
        state.businessData.fetch = false;
        // state.businessData.error = error.message;
      });
  },
});
const buissnessActions = businessSlice.actions;

export { buissnessActions, buisnessSelectors };

export default businessSlice.reducer;
