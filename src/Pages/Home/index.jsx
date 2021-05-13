import React from 'react';
import Navbar from '../../Components/Navbar';
import CarouselMovies from '../../Components/Carousel';
import * as S from './style';

const Home = () => {
  return (
    <S.Container>
      <Navbar />
      <CarouselMovies />
      <S.CentralBar>
        <S.Dot />
        <S.TexTCentralBar>
          <b>CATÁLOGO</b> COMPLETO
        </S.TexTCentralBar>
      </S.CentralBar>
    </S.Container>
  )
};

export default Home;
