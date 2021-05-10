import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import getMovies from '../Service';

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const contextValue = {
    movies,
    setMovies
  };
  const fetchMovies = async () => {
    const allMovies = await getMovies();
    return setMovies(allMovies);
  }
  useEffect(() => {
    fetchMovies();
  }, [])
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
