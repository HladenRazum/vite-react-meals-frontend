import axios, { AxiosError } from "axios";
import { User } from "../types/user.type";
import ENDPOINTS from "./endpoints";

const register = async (user: { user: User }) => {
   try {
      const response = await axios.post(ENDPOINTS.USER.CreateUser, user);
      return response.data;
   } catch (error: any) {
      return error.response;
   }
};

const userAPI = {
   register: register,
};

export default userAPI;
