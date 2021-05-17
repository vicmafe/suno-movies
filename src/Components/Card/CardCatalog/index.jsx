import React from 'react';
import iconStar from '../../../Images/star.png';
import { Link } from 'react-router-dom';
import * as S from './style';

const CardCatalog = ({ movie }) => {
  const { title, rating, poster, overview, id } = movie;

  return (
    <Link
      to={`/details/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <S.Container>
        <S.Poster
          src={poster}
          alt="imagem poster filme"
        />
        <S.ContainerInformation>
          <S.Title>{title}</S.Title>
          <S.Rate>
            <S.Star
              src={iconStar}
              alt="Icone estrela"
            />
            <S.AverageRating>{rating}</S.AverageRating>
          </S.Rate>
          <S.Overview>{overview}</S.Overview>
        </S.ContainerInformation>
      </S.Container>
    </Link>
  );
};

export default CardCatalog;