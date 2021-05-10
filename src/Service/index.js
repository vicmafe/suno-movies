import axios from 'axios';

const apiKey = '7090ec6c8631c6473ca8d07d9869fe92';
const url = 'https://api.themoviedb.org/3';
const releasesMoviesURL = `${url}/movie/upcoming`;
const moviesUrl = `${url}/discover/movie`;
const popularMoviesUrl = `${url}/movie/popular`;

const params= {
  api_key: apiKey,
  language: 'en-US',
  page: 1
};

export const GetReleasesMovies = async () => {
  const { data } = await axios.get(releasesMoviesURL, { params });
  return data.results
};

export const GetAllMovies = async () => {
  const { data } = await axios.get(moviesUrl, { params });
  return data.results
};

export const GetPopularMovies = async () => {
  const { data } = await axios.get(popularMoviesUrl, { params });
  return data.results
};

