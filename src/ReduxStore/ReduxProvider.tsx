"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../application/store/store";

const ReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      {/* <PersistGate  persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default ReduxProvider;
