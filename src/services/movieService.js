import http from "../services/httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndPoint}/${id}}`;
}

export async function getMovies() {
  return await http.get(apiEndPoint);
}

export async function getMovie(movieId) {
  return await http.get(apiEndPoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndPoint, movie);
}
