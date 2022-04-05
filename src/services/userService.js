import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

async function register(email, password, name) {
  return http.post(apiEndPoint, { email, password, name });
}

async function getAllUsers() {
  return await http.get("https://jsonplaceholder.typicode.com/users");
}

export default {
  register,
  getAllUsers,
};
