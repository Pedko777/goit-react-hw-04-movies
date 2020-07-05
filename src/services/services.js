import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '70751a0c86ff1271ff2aa30c5249463a';

const fetchTrendingMovies = () => {
  return axios(`/trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

const fetchMoviesWithQuery = (searchQuery) => {
  return axios(`/search/movie?api_key=${apiKey}&query=${searchQuery}`).then(
    response => response.data.results,
  );
};

const fetchMoviesDetails = (movieId) => {
  return axios(`/movie/${movieId}?api_key=${apiKey}`).then(
    response => response.data,
  );
};

const fetchMovieCast = (movieId) => {
  return axios(`/movie/${movieId}/credits?api_key=${apiKey}`).then(
    response => response.data.cast,
  );
};

const fetchMovieReviews = (movieId) => {
  return axios(`/movie/${movieId}/reviews?api_key=${apiKey}`).then(
    response => response.data.results,
  );
};


export default { fetchTrendingMovies, fetchMoviesWithQuery, fetchMoviesDetails, fetchMovieCast, fetchMovieReviews };
