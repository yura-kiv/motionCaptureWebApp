import { useState } from "react";
import CategoryFitler from "../../components/Filter/CategoryFitler";
import Post from "../../components/Post/Post";
import { useAppSelector } from "../../hooks/redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Category } from "../../types/post";

import s from "./Posts.module.scss";
import { postsCategoryFilter } from "../../constants";

const Posts = () => {
  const posts = useAppSelector(getPosts);
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Posts</div>
      <div className={s.label}>Description:</div>
      <div className={s.text}>
        This page shows an example of an interactive interface that can be
        controlled by capturing the movements of your hand, you can manipulate
        the list items, flip the page, and also make a transition to another
        page, open a modal window, go back through the history, etc. The page
        shows an example of a graphical user interface loaded with elements.
      </div>
      <div className={s.filter}>
        <CategoryFitler
          label="Select category:"
          filters={postsCategoryFilter}
          activeFilter={filter}
          page="posts"
          setFilter={(filter: any) => setFilter(filter)}
        />
      </div>
      <div className={s.posts}>
        {posts
          .filter((post) => (filter === null ? true : filter === post.category))
          .map((post) => (
            <Post
              key={post.id}
              post={post}
              page="posts"
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
