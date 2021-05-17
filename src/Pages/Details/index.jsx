import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import CardCatalog from '../../Components/Card/CardCatalog';
import * as S from './style';
import { Link } from 'react-router-dom';

const Details = (idMovie) => {
  const [detailsMovie, setDetailsMovie] = useState({});

  const { id } = idMovie.match.params;

  const urlRoot = 'https://api.themoviedb.org/3/movie/';
  const params = '?api_key=7090ec6c8631c6473ca8d07d9869fe92&language=en-US';

  const getMovieDetails = async (id) => {
    const { data } = await axios.get(`${urlRoot}${id}${params}`);
    console.log('o que é data', data);
    return setDetailsMovie(data);
  };

  const objectMovie = {
    title: detailsMovie.original_title,
    rating: detailsMovie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`,
    genders: detailsMovie.genre_ids,
    overview: detailsMovie.overview,
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getMovieDetails(id), [])

  return (
    <S.ContainerMain>
      <S.Container>
        <Navbar />
        <S.ContainerCard>
          <CardCatalog movie={objectMovie} />
        </S.ContainerCard>
        <S.BoxButtonBack>
          <Link
            to="/catalog"
          >
            <S.ButtonBack>
              voltar
            </S.ButtonBack>
          </Link>
        </S.BoxButtonBack>
      </S.Container>
      <S.Footer>
        <S.FooterText>
          © 2021 Suno Movies. All rights reserved.
          </S.FooterText>
      </S.Footer>
    </S.ContainerMain>
  )
};

export default Details;



