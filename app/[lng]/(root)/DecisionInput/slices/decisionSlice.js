import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "@/app/constants";

export const fetchDecision = createAsyncThunk("decision/fetchDecision", async () => {
  const response = await fetch("https://yesno.wtf/api");
  const data = await response.json();
  return data;
});

const decisionSlice = createSlice({
  name: "decision",
  initialState: {
    answer: "",
    forced: false,
    image: "",
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDecision.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchDecision.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.answer = action.payload.answer;
        state.forced = action.payload.forced;
        state.image = action.payload.image;
      })
      .addCase(fetchDecision.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default decisionSlice.reducer;
