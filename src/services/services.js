import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=8c247ea0b4b56ed2ff7d41c9a833aa77';
// Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

// Get Move Details by id
export const getMovie = async id => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return resp.data;
};

// Get Search Movie
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
