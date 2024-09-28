import Home from "./assets/svgs/Home";
import Likes from "./assets/svgs/Likes";
import Posts from "./assets/svgs/Posts";
import Tutorial from "./assets/svgs/Tutorial";
import { Page } from "./types/pages";
import { Category } from "./types/post";

export const OVERLAY_ID = "OVERLAY";

export const postsCategoryFilter: { label: string; value: Category }[] = [
  { label: "Nature", value: "nature" },
  { label: "Space", value: "space" },
  { label: "Sport", value: "sport" },
  { label: "Tech", value: "tech" },
];

export const pages: Page[] = [
  { url: "/", label: "Home", icon: <Home /> },
  { url: "/posts", label: "Posts", icon: <Posts /> },
  { url: "/likes", label: "Likes", icon: <Likes /> },
  { url: "/tutorial", label: "Tutorial", icon: <Tutorial /> },
];

export const tutorialList: { label: string; text: string; id: number }[] = [
  {
    label: "☝️ Pointer gesture",
    id: 0,
    text: "This is an analogue of the usual cursor that everyone is used to using, you can hover over objects and observe the effects of hovering, and also understand whether the interface element is interactive.",
  },
  {
    label: "🤏 Pinching gesture",
    id: 1,
    text: "The index finger and thumb pinch gesture is designed to interact with the user interface. This gesture is used to click on an interface element and call the corresponding methods.",
  },
  {
    label: "✌️ Victory gesture",
    id: 2,
    text: "The victory gesture has several uses. It is used for dynamic gestures, namely: swipe left - go back through the application history, swipe right - go forward through the application history, swipe from the bottom to the top - reload the page.",
  },
  {
    label: "✋ Open palm gesture",
    id: 3,
    text: "The gesture of the open palm is responsible for the scroll event of the interface. The page will scroll up if scrolling is available on the page and there is space at the top outside the viewport.",
  },
  {
    label: "✊ Closed palm gesture",
    id: 4,
    text: "The gesture of the closed palm is responsible for the scroll event of the interface. The page will scroll down if scrolling is available on the page and there is space at the bottom outside of the viewport.",
  },
];
