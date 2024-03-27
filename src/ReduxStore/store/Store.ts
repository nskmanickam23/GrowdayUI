import userSlices from "../slices/userSlice";
import tokenSlice from "../slices/tokenSlice";
import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "../slices/businessSlice";

const store = configureStore({
  reducer: {
    user: userSlices,
    token: tokenSlice,
    business: businessSlice,
  },
});

export default store;

// selectors.js

// export const selectUser = (state:any) => state.user.userData;

// export const selectIsUserLoggedIn = (state: any) => !!state.user.userData.id;

// export const selectTokenExists = (state: any) => !!state.token.token;

// export const businessData = (state: any) => state.business.businessData;
