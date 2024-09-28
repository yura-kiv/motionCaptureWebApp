import { useNavigate, useParams } from "react-router-dom";
import s from "./Post.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPosts, toggleLike } from "../../redux/slices/postsSlice";
import Button from "../../components/Button/Button";
import ArrowBottom from "../../assets/svgs/ArrowBottom";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams() as { id: any };
  const post = useAppSelector(getPosts).find((post) => post.id == params.id);

  if (post)
    return (
      <div className={s.wrapper}>
        <div className={s.header}>
          <Button
            text="Go to posts"
            icon={<ArrowBottom style={{ rotate: "90deg" }} />}
            id="post_goPosts"
            category="outline"
            onClick={() => navigate("/posts")}
          />
          <div className={s.title}>Post detail page: {post.id}</div>
        </div>
        <div className={s.container}>
          <div className={s.imgWrapper}>
            <img
              className={s.img}
              src={post.img}
            />
          </div>
          <div className={s.content}>
            <div className={s.title}>{post.label}</div>
            <div className={s.text}>{post.text}</div>
            <div className={s.category}>Category: {post.category}</div>
            <Button
              id={`post_like${post.id}`}
              size="sm"
              category="secondary"
              text={post.like ? "Unlike" : "Like"}
              onClick={() => dispatch(toggleLike(post.id))}
            />
          </div>
        </div>
      </div>
    );
};

export default Post;
