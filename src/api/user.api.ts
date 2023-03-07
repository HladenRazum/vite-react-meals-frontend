import ENDPOINTS from "./endpoints";

const register = async (user: any) => {
   const response = await fetch(ENDPOINTS.USER.CreateUser, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
         "Content-Type": "Application/json",
      },
   });

   if (!response.ok) {
      throw new Error("Network response failed");
   }

   const data = response.json();

   return data;
};

const userAPI = {
   register: register,
};

export default userAPI;
