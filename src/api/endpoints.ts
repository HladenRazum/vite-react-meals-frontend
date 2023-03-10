const BASE_URL = "http://localhost:9999";

const ENDPOINTS = {
   USER: {
      CreateUser: `${BASE_URL}/users/`,
   },
   AUTH: {
      validateEmail: `${BASE_URL}/auth/validate-email`,
   },
};

export default ENDPOINTS;
