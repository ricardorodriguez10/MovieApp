import axios from "axios";

const API_KEY = "7bb4434dd2eedec5de983cc55a3d2b31";
const API_ROOT = "https://api.themoviedb.org/3";

export const searchFilms = async (query) => {
  return axios.get(
    `${API_ROOT}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const getAllPopularMovies = async () => {
  return axios.get(
    `${API_ROOT}/movie/popular?api_key=${API_KEY}&language=en-US`
  );
};
