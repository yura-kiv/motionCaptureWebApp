import { FC, useContext, useEffect } from "react";
import { Post as PostT } from "../../types/post";
import s from "./Post.module.scss";
import { NodesContext } from "../../contexts/nodesContext";
import Button from "../../components/Button/Button";
import { useAppDispatch } from "../../hooks/redux";
import { openModal } from "../../redux/slices/modalsSlice";
import { PostModalParams } from "../../modals/PostModal/PostModal";
import { useNavigate } from "react-router-dom";
import { toggleLike } from "../../redux/slices/postsSlice";

type PostProps = {
  post: PostT;
  page: string;
};

const Post: FC<PostProps> = ({ post, page }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addHoverNode, removeHoverNode } = useContext(NodesContext);
  const hoverPostId = `${page}_post${post.id}`;
  const hoverImgId = `${page}_postImg${post.id}`;

  useEffect(() => {
    return () => {
      removeHoverNode(hoverPostId);
      removeHoverNode(hoverImgId);
    };
  }, []);

  return (
    <div
      className={s.wrapper}
      ref={(ref) =>
        addHoverNode({
          id: hoverPostId,
          ref,
          hoverClassName: "post",
        })
      }
    >
      <div
        className={s.imgWrapper}
        ref={(ref) =>
          addHoverNode({
            id: hoverImgId,
            ref,
            hoverClassName: "postImg",
          })
        }
        onClick={() =>
          dispatch(
            openModal({
              name: "post",
              otherParams: { post } as PostModalParams,
            })
          )
        }
      >
        <img
          className={s.img}
          src={post.img}
        />
      </div>
      <div className={s.content}>
        <div className={s.header}>
          <div className={s.title}>{post.label}</div>
          <Button
            id={`${page}_postLike${post.id}`}
            size="sm"
            category="secondary"
            text={post.like ? "Unlike" : "Like"}
            onClick={() => dispatch(toggleLike(post.id))}
          />
        </div>
        <div className={s.text}>{post.text}</div>
        <div className={s.category}>Category: {post.category}</div>
      </div>
      <div className={s.buttons}>
        <Button
          id={`${page}_postOpen${post.id}`}
          size="sm"
          text="Open"
          category="outline"
          onClick={() =>
            dispatch(
              openModal({
                name: "post",
                otherParams: { post } as PostModalParams,
              })
            )
          }
        />
        <Button
          id={`${page}_postGo${post.id}_`}
          size="sm"
          text="Go to page"
          onClick={() => navigate(`/posts/${post.id}`)}
        />
      </div>
    </div>
  );
};

export default Post;
