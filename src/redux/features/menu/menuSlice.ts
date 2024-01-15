import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../store";

export interface MenuState {
  showMobileMenu: boolean;
}

const initialState: MenuState = {
  showMobileMenu: false,
};

const menuSlice = createSlice({
  extraReducers: (builder) => {},
  initialState,
  name: "menu",
  reducers: {
    showMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.showMobileMenu = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const selectMenu = (state: RootState) => state.menu;

export const { showMobileMenu } = menuSlice.actions;
