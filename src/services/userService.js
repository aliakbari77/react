import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

async function register(email, password, name) {
  return http.post(apiEndPoint, { email, password, name });
}

export default {
  register,
};
