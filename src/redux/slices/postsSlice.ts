import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Post } from "../../types/post";
import { posts as postsAsset } from "../../assets/posts";

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: postsAsset,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.like = !post.like;
      }
    },
  },
});

export const { toggleLike } = postsSlice.actions;

export const getPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
