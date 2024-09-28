import { closeModal } from "../../redux/slices/modalsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Modal } from "../../types/modal";
import PostModal from "../../modals/PostModal/PostModal";
import s from "./ModalFrame.module.scss";
import { FC, ReactElement } from "react";
import { OVERLAY_ID } from "../../constants";

const ModalFrameOverlay: FC<{
  children: ReactElement;
  closeFunc: () => void;
}> = ({ children, closeFunc }) => {
  return (
    <div
      id={OVERLAY_ID}
      className={s.overlay}
      onClick={(e) => {
        e.stopPropagation();
        closeFunc();
      }}
    >
      <div
        className={s.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ModalFrame = () => {
  const dispatch = useAppDispatch();
  const modals = useAppSelector((state) => state.modal);
  const closeFunc = (name: Modal) => dispatch(closeModal(name));

  return (
    <>
      {modals.post.isShow && (
        <ModalFrameOverlay closeFunc={() => closeFunc("post")}>
          <PostModal
            closeFunc={() => closeFunc("post")}
            data={modals.post}
          />
        </ModalFrameOverlay>
      )}
    </>
  );
};
