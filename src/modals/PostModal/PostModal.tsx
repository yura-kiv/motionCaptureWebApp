import { FC } from "react";
import { ModalProps } from "../../types/modal";
import s from "./PostModal.module.scss";
import { Post } from "../../types/post";
import Button from "../../components/Button/Button";

export type PostModalParams = {
  post: Post;
};

const PostModal: FC<ModalProps> = ({ closeFunc, data }) => {
  const { post } = data.otherParams! as PostModalParams;

  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          src={post.img}
        />
      </div>
      <div className={s.content}>
        <div className={s.title}>{post.label}</div>
        <div className={s.text}>{post.text}</div>
        <div className={s.category}>{post.category}</div>
      </div>
      <div className={s.buttons}>
        <Button
          id={`modal_post${post.id}`}
          size="sm"
          text="Close"
          category="outline"
          onClick={closeFunc}
        />
      </div>
    </div>
  );
};

export default PostModal;
