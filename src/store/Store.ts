import { configureStore } from "@reduxjs/toolkit";
import ScreenSlice from "./ScreenSlice";

const store = configureStore({
  reducer: ScreenSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
