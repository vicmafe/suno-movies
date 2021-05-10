import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { GetAllMovies, GetReleasesMovies, GetPopularMovies } from '../Service';

function Provider({ children }) {
  const [releaseMovies, setReleaseMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const fetchMovies = async () => {
    const responsePopularMovies = await GetPopularMovies();
    setPopularMovies(responsePopularMovies);
    const responseReleasesMovie = await GetReleasesMovies();
    setReleaseMovies(responseReleasesMovie);
    const responseMovies = await GetAllMovies();
    return setAllMovies(responseMovies);
  }

  useEffect(() => fetchMovies(), []);

  const contextValue = {
    releaseMovies,
    setReleaseMovies,
    allMovies,
    setAllMovies,
    popularMovies,
    setPopularMovies
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
