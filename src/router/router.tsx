import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Posts from "../pages/posts/Posts";
import Post from "../pages/post/Post";
import Likes from "../pages/likes/Likes";
import Tutorial from "../pages/tutorial/Tutorial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
      {
        path: "/tutorial",
        element: <Tutorial />,
      },
    ],
  },
]);
