import React, { useState } from 'react';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const contextValue = {
    movies,
    setMovies
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
