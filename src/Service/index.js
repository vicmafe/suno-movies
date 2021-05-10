import axios from 'axios';

const apiKey = '7090ec6c8631c6473ca8d07d9869fe92';
const url = 'https://api.themoviedb.org/3/';
const allMovies = `${url}/discover/movie`;

export const getMovies = async () => {
  const { data } = await axios.get(allMovies, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1
    }
  });
  return data
};
