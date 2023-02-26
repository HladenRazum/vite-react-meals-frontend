import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../types/theme.type";

interface UserState {
   user: {
      id: string;
      username: string;
      isAdmin: boolean;
   };
   isLoggedIn: boolean;
   theme: Theme;
}

const initialState: UserState = {
   user: {
      id: "",
      username: "",
      isAdmin: false,
   },
   isLoggedIn: false,
   theme: "light",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      login: (state) => {
         state.user = {
            id: "123",
            username: "KK",
            isAdmin: true,
         };

         state.isLoggedIn = true;
      },

      changeTheme: (state, action: PayloadAction<Theme>) => {
         state.theme = action.payload;
         document.body.setAttribute("class", state.theme);
      },
   },
});

export const { login, changeTheme } = userSlice.actions;

export const getTheme = (state: any) => state.user.theme;

export default userSlice;
