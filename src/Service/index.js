import axios from 'axios';

const apiKey = '7090ec6c8631c6473ca8d07d9869fe92';
const url = 'https://api.themoviedb.org/3';
const releasesMoviesURL = `${url}/movie/upcoming`;
const moviesUrl = `${url}/discover/movie`;
const popularMoviesUrl = `${url}/movie/popular`;

export const GetReleasesMovies = async () => {
  const { data } = await axios.get(releasesMoviesURL, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      page: 1
    }
  });
  return data.results
};

export const GetAllMovies = async () => {
  const { data } = await axios.get(moviesUrl, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      page: 2
    }
  });
  return data.results
};

export const GetPopularMovies = async () => {
  const { data } = await axios.get(popularMoviesUrl, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      page: 1
    }
  });
  return data.results
};

