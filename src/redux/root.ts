import { combineSlices } from "@reduxjs/toolkit";
import { modalSlice } from "./slices/modalsSlice";
import { sideBarSlice } from "./slices/sideBarSlice";
import { postsSlice } from "./slices/postsSlice";

export const rootReducer = combineSlices(modalSlice, sideBarSlice, postsSlice);

export type RootReducer = ReturnType<typeof rootReducer>;
