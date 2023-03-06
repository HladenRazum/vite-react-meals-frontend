import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/counter/counterSlice";
import userSlice from "../store/user/userSlice";

const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      user: userSlice.reducer,
   },
});

export default store;
