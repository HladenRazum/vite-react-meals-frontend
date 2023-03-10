import axios from "axios";
import ENDPOINTS from "./endpoints";

const validateEmail = async (email: string) => {
   try {
      const response = await axios.post(ENDPOINTS.AUTH.validateEmail, email);
      console.log(response.data);
      return response.data;
   } catch (error: any) {
      console.log(error.response);
      return error.response;
   }
};

const authAPI = {
   validateEmail,
};

export default authAPI;
