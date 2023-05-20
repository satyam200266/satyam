import axios from "axios";



const baseURL = import.meta.env.VITE_BACKEND_API_BASE_URL;

function getAccessToken() {
    const storage = JSON.parse(localStorage.getItem("user"))

    return storage ? storage?.token : null
  }

export const req = axios.create({
    baseURL,
});
 

req.interceptors.request.use(config => {
    const newToken = getAccessToken();
    if (newToken) {
      config.headers.token = `Bearer ${newToken}`;
    }
    return config;
  });
  

