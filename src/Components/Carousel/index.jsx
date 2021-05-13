import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Carousel from 'react-elastic-carousel';
import * as S from './style';

const CarouselMovies = () => {
  const { releaseMovies } = useContext(AppContext);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const moviesCarousel = releaseMovies.map(movie => {
    return  {
      title: movie.original_title,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      genders: movie.genre_ids,
      overview: movie.overview,
      carousel: true
    }
  });
  return (
    <S.Container>
      <S.ContainerCarousel>
        <S.Title>
          <S.Dot />
          <b>LANÇAMENTOS</b> DA SEMANA
        </S.Title>
        <Carousel breakPoints={breakPoints}>
          {moviesCarousel.length >=1 && moviesCarousel.slice(11, 20)
            .map((element, index) =>
              (
                <S.Card key={index}>
                  <Card movie={ element } />
                </S.Card>
              )
            )
          }
        </Carousel>
      </S.ContainerCarousel>
    </S.Container>
  );
};

export default CarouselMovies;
