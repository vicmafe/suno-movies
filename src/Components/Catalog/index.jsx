import React, { useContext, useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import AppContext from '../../Context/AppContext';
import * as S from './style';

const CatalogMovies = () => {
  const { popularMovies, allMovies, genderId } = useContext(AppContext);
  const [typeCatalogMovie, setTypeCatalogMovie] = useState([]);
  const [buttonFilter, setButtonFilter] = useState('todos filmes');
  const handleChangeCatalog = (type) => {
    if (type === 'mais populares') {
      setTypeCatalogMovie(popularMovies);
      return setButtonFilter('todos filmes')
    }
    if (type === 'todos filmes') {
      setTypeCatalogMovie(allMovies);
      return setButtonFilter('mais populares');
    }

  };
  const catalogMovie = typeCatalogMovie.map(movie => {
    return  {
      title: movie.original_title,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      genders: movie.genre_ids,
      overview: movie.overview,
      carousel: false
    }
  });

  return (
    <>
      <>
        <>
          <select
            onChange={ ({ target }) => handleChangeCatalog(target.value) }
          >
          <option key="choice" value="">por gênero</option>
          {
            genderId.map((gender, index) => (
              <option key={ index } value={ gender.name }>{gender.name}</option>
            ))
          }
          </select>
          <Button
            value={ buttonFilter }
            onChange={ ({ target }) => handleChangeCatalog(target.value) }
          >
            { buttonFilter }
          </Button>
        </>
        <Button
          onChange={ () => handleChangeCatalog('allMovies') }
        >
          grid
        </Button>
      </>
      {
        catalogMovie.length >=1 && 
        catalogMovie.map((element, index) =>
          (
            <S.Card key={index}>
              <Card movie={ element } />
            </S.Card>
          )
        )
      }
    </>
  )
};

export default CatalogMovies;