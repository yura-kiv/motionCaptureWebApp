import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Post from "../../components/Post/Post";
import { useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../redux/slices/postsSlice";
import s from "./Likes.module.scss";

const Likes = () => {
  const navigate = useNavigate();
  const posts = useAppSelector(getPosts);
  const filteredPosts = posts.filter((post) => post.like);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Likes</div>

      {filteredPosts.length > 0 ? (
        <div className={s.posts}>
          {filteredPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              page="likes"
            />
          ))}
        </div>
      ) : (
        <div className={s.empty}>
          <div className={s.text}>You dont have any liked post</div>
          <Button
            size="lg"
            category="secondary"
            id="home_goPosts"
            text="Go to posts"
            onClick={() => navigate("/posts")}
          />
        </div>
      )}
    </div>
  );
};

export default Likes;
