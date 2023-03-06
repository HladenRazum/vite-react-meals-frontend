import { ReactElement } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NewRecipe from "../pages/NewRecipe/NewRecipe";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import TestPage from "../pages/Testpage/TestPage";
import UserProfile from "../pages/UserProfile/UserProfile";

type Route = {
   name: string;
   path: string;
   element: ReactElement;
};

type Routes = Record<RouteName, Route>;

export const ROUTES: Routes = {
   home: {
      path: "/",
      name: "home",
      element: <Home />,
   },
   register: {
      name: "register",
      path: "/register",
      element: <Register />,
   },
   notFound: {
      name: "notFound",
      path: "*",
      element: <NotFound />,
   },
   recipes: {
      name: "recipes",
      path: "/recipes",
      element: <p>Some recipes</p>,
   },
   recipe: {
      name: "recipe",
      path: "/recipes/:recipeId",
      element: <p>Single recipe</p>,
   },
   newRecipe: {
      name: "new recipe",
      path: "/new-recipe",
      element: <NewRecipe />,
   },
   testing: {
      name: "testing",
      path: "/test",
      element: <TestPage />,
   },
   userProfile: {
      name: "user profile",
      path: "/user-profile/:userId",
      element: <UserProfile />,
   },
};

export enum RouteName {
   Home = "home",
   NewRecipe = "newRecipe",
   NotFound = "notFound",
   Recipe = "recipe",
   Recipes = "recipes",
   Register = "register",
   TESTING = "testing",
   UserProfile = "userProfile",
}
