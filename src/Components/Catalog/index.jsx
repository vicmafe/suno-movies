import React, { useContext, useState } from 'react';
import Card from '../Card';
import AppContext from '../../Context/AppContext';
import * as S from './style';

const CatalogMovies = () => {
  const { popularMovies, allMovies, genderId } = useContext(AppContext);

  const [typeMovieCatalog, setTypeMovies] = useState(allMovies);
  const [buttonFilter, setButtonFilter] = useState('todos filmes');
  const [toggleButtonMore, setToggleButtonMore] = useState(false);
  const [toggleMoreCatalog, setToggleMoreCatalog] = useState(false)

  const handleChangeCatalog = (type) => {
    setToggleButtonMore(true);
    console.log('o que é type:', type);
    if (type === 'mais populares') {
      const popularMoviesPart = popularMovies.slice(4, 20);
      setTypeMovies(popularMoviesPart);
      return setButtonFilter('todos filmes')
    }
    if (type === 'todos filmes') {
      setTypeMovies(allMovies);
      return setButtonFilter('mais populares');
    }

  };
  const moreLoadMovies = () => {
    setToggleMoreCatalog(true);
    return setToggleButtonMore(false)
  };
  const moviesCatalog = typeMovieCatalog.map(movie => {
    return {
      title: movie.original_title,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      genders: movie.genre_ids,
      overview: movie.overview,
      carousel: false
    }
  });
  const moviesCatalogMain = moviesCatalog.slice(0, 9)
  const moviesCatalogMore = moviesCatalog.slice(10, 19)
  return (
    <S.ContainerCatalog>
      <S.ButtonsContainer>
        <S.SelectMovies>
          <S.InputSelect
            onChange={({ target }) => handleChangeCatalog(target.value)}
          >
            <option key="choiceGender" value="">por gênero</option>
            {
              genderId.map((gender, index) => (
                <option key={index} value={gender.name}>{gender.name}</option>
              ))
            }
          </S.InputSelect>
          <S.ButtonChoiceType
            type="button"
            value={buttonFilter}
            onClick={() => handleChangeCatalog(buttonFilter)}
          >
            {buttonFilter}
          </S.ButtonChoiceType>
        </S.SelectMovies>
        <S.InputSelect
          onChange={() => console.log('mudou exibição do catálogo')}
        >
          <option key="choicevieW" value="grid">grid</option>
          <option key="choicevieW" value="grid">em lista</option>
        </S.InputSelect>
      </S.ButtonsContainer>
      <S.CardCatalog>
        {
          moviesCatalogMain.length >= 1 &&
          moviesCatalogMain.map((element, index) =>
          (
            <Card key={index} movie={element} />
          )
          )
        }
        {
          !toggleMoreCatalog ? <></> :
            moviesCatalogMore.map((element, index) =>
              <S.CardCatalog>
                <Card key={index} movie={element} />
              </S.CardCatalog>
            )
        }
      </S.CardCatalog>
      {
        !toggleButtonMore ? <></> :
          <S.BoxButtonMore>
            <S.ButtonCatalogMore
              type="button"
              onClick={() => moreLoadMovies()}
            >
              carregar mais
          </S.ButtonCatalogMore>
          </S.BoxButtonMore>
      }
    </S.ContainerCatalog>
  )
};

export default CatalogMovies;