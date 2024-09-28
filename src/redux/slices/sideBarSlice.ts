import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SideBarState = {
  isMini: boolean;
};

const initialState: SideBarState = {
  isMini: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setSideBarIsMini: (state, action: PayloadAction<boolean>) => {
      state.isMini = action.payload;
    },
  },
});

export const { setSideBarIsMini } = sideBarSlice.actions;

export const getSideBarIsMini = (state: RootState) => state.sideBar.isMini;

export default sideBarSlice.reducer;
