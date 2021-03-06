import React, { useContext, useState, useEffect } from 'react';
import CardCatalog from '../Card/CardCatalog';
import AppContext from '../../Context/AppContext';
import * as S from './style';

const CatalogMovies = () => {
  const { popularMovies, allMovies, genderId, showCatalog } = useContext(AppContext);

  const [typeMovieCatalog, setTypeMovies] = useState(allMovies);
  const [buttonFilter, setButtonFilter] = useState('todos filmes');
  const [toggleButtonMore, setToggleButtonMore] = useState(false);
  const [toggleMoreCatalog, setToggleMoreCatalog] = useState(false)
  const [displayCatalog, setDisplayCatalog] = useState()

  const handleChangeCatalog = (type) => {
    setToggleButtonMore(true);
    if (type === 'mais populares') {
      const popularMoviesPart = popularMovies.slice(4, 20);
      setTypeMovies(popularMoviesPart);
      return setButtonFilter('todos filmes')
    };
    if (type === 'todos filmes') {
      setTypeMovies(allMovies);
      return setButtonFilter('mais populares');
    };

  };

  const moreLoadMovies = () => {
    setToggleMoreCatalog(true);
    return setToggleButtonMore(false)
  };

  useEffect(() => setToggleButtonMore(true), [showCatalog]);

  const moviesCatalog = typeMovieCatalog.map(movie => {
    return {
      title: movie.original_title,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      genders: movie.genre_ids,
      overview: movie.overview,
      id: movie.id
    };
  });

  const moviesCatalogMain = moviesCatalog.slice(0, 9);
  const moviesCatalogMore = moviesCatalog.slice(10, 19);

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
            };
          </S.InputSelect>
          <S.ButtonChoiceType
            type="button"
            value={buttonFilter}
            onClick={() => handleChangeCatalog(buttonFilter)}
          >
            {buttonFilter};
          </S.ButtonChoiceType>
        </S.SelectMovies>
        <S.InputSelect
          id="id-select"
          onChange={({ target }) => setDisplayCatalog(target.value)}
        >
          <option value="">exibir</option>
          <option value="grid">grid</option>
          <option value="lista">em lista</option>
        </S.InputSelect>
      </S.ButtonsContainer>
      <S.CardCatalogContainer
        displayShow={displayCatalog}
      >
        {
          moviesCatalogMain.length >= 1 &&
          moviesCatalogMain.map((element, index) =>
            <CardCatalog key={index} movie={element} />
          )
        };
        {
          !toggleMoreCatalog ? <></> :
            moviesCatalogMore.map((element, index) =>
              <CardCatalog key={index} movie={element} />
            )
        };
      </S.CardCatalogContainer>
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
      };
    </S.ContainerCatalog>
  )
};

export default CatalogMovies;