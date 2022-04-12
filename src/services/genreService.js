import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/genres";

export async function getGenres() {
  return await http.get(apiEndPoint);
}
