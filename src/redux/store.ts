import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (middleware) => middleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
