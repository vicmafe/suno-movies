import React, { useContext, useState } from 'react';
import Card from '../Card';
import AppContext from '../../Context/AppContext';
import * as S from './style';

const CatalogMovies = () => {
  const { popularMovies, allMovies, genderId } = useContext(AppContext);
  const [typeCatalogMovie, setTypeCatalogMovie] = useState(allMovies);
  const [buttonFilter, setButtonFilter] = useState('todos filmes');
  const handleChangeCatalog = (type) => {
    console.log('o que é type:', type);
    if (type === 'mais populares') {
      const popularMoviesPart = popularMovies.slice(4, 20);
      setTypeCatalogMovie(popularMoviesPart);
      return setButtonFilter('todos filmes')
    }
    if (type === 'todos filmes') {
      setTypeCatalogMovie(allMovies);
      return setButtonFilter('mais populares');
    }

  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <S.ContainerCatalog>
      <S.ButtonsContainer>
          <S.SelectMovies>
            <S.InputSelect
              onChange={ ({ target }) => handleChangeCatalog(target.value) }
            >
            <option key="choiceGender" value="">por gênero</option>
            {
              genderId.map((gender, index) => (
                <option key={ index } value={ gender.name }>{gender.name}</option>
              ))
            }
            </S.InputSelect>
            <S.ButtonChoiceType
              type="button"
              value={ buttonFilter }
              onClick={ () => handleChangeCatalog(buttonFilter) }
            >
              { buttonFilter }
            </S.ButtonChoiceType>
          </S.SelectMovies>
        <S.InputSelect
          onChange={ () => console.log('mudou exibição do catálogo') }
        >
          <option key="choicevieW" value="grid">grid</option>
          <option key="choicevieW" value="grid">em lista</option>
        </S.InputSelect>
      </S.ButtonsContainer>
      <S.CardCatalog>
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
      </S.CardCatalog>
    </S.ContainerCatalog>
  )
};

export default CatalogMovies;