import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';

const Carousel = () => {
  const { releaseMovies } = useContext(AppContext);
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
  console.log('quandidade de filmes no array:', moviesCarousel.length);
  console.log('array filmes:', moviesCarousel);
  return (
    <>
      {moviesCarousel.length >=1 && moviesCarousel.slice(5, 13)
        .map(element =>
          <Card movie={ element } />
        )
      }
    </>
  );
};

export default Carousel;
