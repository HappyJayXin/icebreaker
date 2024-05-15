import { configureStore } from "@reduxjs/toolkit";
import decisionReducer from "@/app/[lng]/(root)/DecisionInput/slices/decisionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      decision: decisionReducer,
    },
  });
};
