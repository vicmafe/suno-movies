import React from 'react';
import iconStar from '../../Images/star.png';
import * as S from './style';

const Card = ({ movie }) => {
  const { title, rating, poster, genders, overview, carousel } = movie;
  return (
    <>
      <S.Poster
        src={ poster }
        alt="imagem poster filme"
      />
      <S.Title>{ title}</S.Title>
      <S.Genre>{ genders }</S.Genre>
      <S.Rate>
        <S.Star
          src={ iconStar }
          alt="Icone estrela"
        />
        <S.AverageRating>{ rating }</S.AverageRating>
      </S.Rate>
      {
        carousel ? <></> : <S.Overview>{ overview }</S.Overview>
      };
    </>
  );
};

export default Card;
