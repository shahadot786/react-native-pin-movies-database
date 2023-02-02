import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=889a8f68e9c97462959ef1a11f65b25a';

//get popular movies
export const getPopularMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return response.data.results;
};

//get upcoming movies
export const getUpcomingMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return response.data.results;
};

//get upcoming tv
export const getUpcomingTv = async () => {
  const response = await axios.get(`${apiUrl}/tv/upcoming?${apiKey}`);
  return response.data.results;
};

//get to-rated movies
export const getTopRatedMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/top_rated?${apiKey}`);
  return response.data.results;
};

//get family movies
export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return response.data.results;
};

//get thriller movies
export const getThrillerMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=53`,
  );
  return response.data.results;
};
