import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "@/app/constants";

export const fetchDecision = createAsyncThunk(
  "decision/fetchDecision",
  async (params, { rejectWithValue }) => {
    try {
      if (!params.query) {
        return rejectWithValue("Query is missing");
      }

      const response = await fetch("https://yesno.wtf/api");
      const data = await response.json();
      if (!data.answer || !data.image) {
        return rejectWithValue("Incomplete data received from API");
      }

      return {
        answer: data.answer,
        image: data.image,
        query: params.query,
      };
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  progress: 0,
  query: "",
  answer: "",
  image: "",
  status: "idle",
  error: null,
};

const decisionSlice = createSlice({
  name: "decision",
  initialState: initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    resetDecision: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDecision.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchDecision.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.answer = action.payload.answer;
        state.image = action.payload.image;
        state.query = action.payload.query;
        state.progress = 100;
      })
      .addCase(fetchDecision.rejected, (state, action) => {
        state.progress = 0;
        state.status = STATUS.FAILED;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setProgress, resetDecision } = decisionSlice.actions;

export default decisionSlice.reducer;
