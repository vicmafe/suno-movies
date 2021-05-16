import React, { useContext } from 'react';
import iconStar from '../../../Images/star.png';
import AppContext from '../../../Context/AppContext';
import * as S from './style';

const CardCatalog = ({ movie }) => {
  const { genderId } = useContext(AppContext);

  const { title, rating, poster, genders, overview } = movie;

  const gendersName = genders.map(code => {
    const verifyId = genderId.filter(genre => genre.id === code)
    return verifyId;
  }
  );
  return (
    <S.Container>
      <S.Poster
        src={poster}
        alt="imagem poster filme"
      />
      <S.ContainerInformation>
        <S.Title>{title}</S.Title>
        {
          gendersName.length >= 1 && gendersName.map((element, index) => (
            <S.Genre key={index}>
              { element.name}
            </S.Genre>
          ))
        }
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
  );
};

export default CardCatalog;