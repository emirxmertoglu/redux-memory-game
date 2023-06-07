import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "@/reducers/playgroundReducer";

const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
});

export default store;
