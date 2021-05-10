import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { GetAllMovies, GetReleasesMovies, GetPopularMovies } from '../Service';

function Provider({ children }) {
  const [releaseMovies, setReleaseMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const fetchMovies = async () => {
    const responsePopularMovies = await GetPopularMovies();
    console.log('popular', responsePopularMovies)
    const responseReleasesMovie = await GetReleasesMovies();
    console.log('lançamentos:', responseReleasesMovie)
    const responseMovies = await GetAllMovies();
    console.log('todos filmes', responseMovies)
    return setAllMovies(responseMovies);
  }
  useEffect(() => {
    fetchMovies();
  }, [])
  const contextValue = {
    releaseMovies,
    setReleaseMovies,
    allMovies,
    setAllMovies
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
