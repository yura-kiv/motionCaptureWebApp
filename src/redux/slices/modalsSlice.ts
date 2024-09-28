import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Modal, ModalStatus } from "../../types/modal";

export type ModalSlice = Record<Modal, ModalStatus>;

const initialState: ModalSlice = {
  post: {
    isShow: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        name: Modal;
        otherParams?: ModalStatus["otherParams"];
      }>
    ) => {
      state[action.payload.name] = {
        isShow: true,
        otherParams: action.payload.otherParams,
      };
    },
    closeModal: (state, action: PayloadAction<Modal>) => {
      state[action.payload] = { isShow: false, otherParams: undefined };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
