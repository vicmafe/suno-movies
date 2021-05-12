import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { GetAllMovies, GetReleasesMovies, GetPopularMovies, GetGenderId } from '../Service';

function Provider({ children }) {
  const [releaseMovies, setReleaseMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [genderId, setGenderId] = useState([]);

  const fetchMovies = async () => {
    const responsePopularMovies = await GetPopularMovies();
    setPopularMovies(responsePopularMovies);
    const responseReleasesMovie = await GetReleasesMovies();
    setReleaseMovies(responseReleasesMovie);
    const responseGenderId = await GetGenderId();
    setGenderId(responseGenderId);
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
    setPopularMovies,
    genderId
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
