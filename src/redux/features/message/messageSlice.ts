import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface MessageState {
  errorMessage: null | string;
  successMessage: null | string;
}

const initialState: MessageState = {
  errorMessage: "",
  successMessage: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    showSuccessMessage: (state, action: PayloadAction<string>) => {
      state.successMessage = action.payload;
    },
  },
});

export default messageSlice.reducer;
export const selectMessage = (state: RootState) => state.message;
export const { showErrorMessage, showSuccessMessage } = messageSlice.actions;
