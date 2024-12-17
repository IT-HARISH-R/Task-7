const API_KEY = "c2062f5b";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}&page=${page}`);
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return response.json();
};

export const fetchFilteredMovies = async (query, type, page = 1) => {
  const response = await fetch(`${BASE_URL}?s=${query}&type=${type}&apikey=${API_KEY}&page=${page}`);
  return response.json();
};
