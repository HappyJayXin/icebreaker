import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "@/app/constants";

import { showToast } from "@/app/components/Toast/toastSlice";
import { MESSAGES } from "@/app/components/Toast/data";

export const fetchDecision = createAsyncThunk(
  "decision/fetchDecision",
  async (params, { dispatch }) => {
    try {
      if (!params.query) {
        dispatch(showToast(MESSAGES.miss_query));
        throw new Error(MESSAGES.miss_query.text);
      }

      const response = await fetch("https://yesno.wtf/api");
      const data = await response.json();

      if (!data.answer || !data.image) {
        dispatch(showToast(MESSAGES.partial_data));
        throw new Error(MESSAGES.partial_data.text);
      }

      const getAnswerText = (answer) => {
        const randomIndex = Math.floor(Math.random() * 3) + 1;
        return `${answer}_${randomIndex}`;
      };

      return {
        answer: data.answer,
        image: data.image,
        query: params.query,
        answerText: getAnswerText(data.answer),
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  progress: 0,
  query: "",
  answer: "",
  answerText: "",
  image: "",
  status: "idle",
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
        state.answerText = action.payload.answerText;
        state.image = action.payload.image;
        state.query = action.payload.query;
        state.progress = 100;
      })
      .addCase(fetchDecision.rejected, (state, action) => {
        state.progress = 0;
        state.status = STATUS.FAILED;
      });
  },
});

export const { setProgress, resetDecision } = decisionSlice.actions;

export default decisionSlice.reducer;
