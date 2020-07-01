const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '70751a0c86ff1271ff2aa30c5249463a';

const fetchTrendingMovies = () => {
  return fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => data.results);
};

const fetchMoviesWithQuery = (searchQuery) => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

export default { fetchTrendingMovies, fetchMoviesWithQuery };
