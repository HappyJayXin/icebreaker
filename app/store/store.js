import { configureStore } from "@reduxjs/toolkit";
import decisionReducer from "@/app/[lng]/(root)/DecisionInput/decisionSlice";
import toastReducer from "@/app/components/Toast/toastSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      decision: decisionReducer,
      toast: toastReducer,
    },
  });
};
