import React from 'react';
import Logo from '../../Images/suno-movies.png';
import { Link } from 'react-router-dom';
import * as S from './style';

const Home = () => {
  return (
    <S.Container>
      <S.Title>Bem vindo ao</S.Title>
      <Link
        to='/catalog'
      >
        <S.ImagemSunoMovies
          src={Logo}
          alt="logo suno movies"
        />
      </Link>
    </S.Container>
  )
};

export default Home;
