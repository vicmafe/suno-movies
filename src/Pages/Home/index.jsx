import React from 'react';
import Navbar from '../../Components/Navbar';
import CarouselMovies from '../../Components/Carousel';
import Catalog from '../../Components/Catalog';
import * as S from './style';

const Home = () => {
  return (
    <S.Container>
      <Navbar />
      <CarouselMovies />
      <S.CentralBar>
        <S.TexTCentralBar>
        <S.Dot />
          <b>CATÁLOGO</b> COMPLETO
        </S.TexTCentralBar>
      </S.CentralBar>
      <S.Catalog>
        <Catalog />
      </S.Catalog>
    </S.Container>
  )
};

export default Home;
