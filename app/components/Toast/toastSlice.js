import { createSlice } from "@reduxjs/toolkit";
import { ALERT_TYPES } from "./data";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    visible: false,
    type: ALERT_TYPES.info,
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.text;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideToast: (state) => {
      state.visible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
