import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = config.apiUrl + "/auth";
const tokenKey = "token";

async function login(email, password) {
  const { data } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, data);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  getCurrentUser,
  logout,
};
