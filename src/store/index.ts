import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/counter/counterSlice";
import userSlice from "../store/user/userSlice";

export default configureStore({
   reducer: {
      counter: counterSlice.reducer,
      user: userSlice.reducer,
   },
});
