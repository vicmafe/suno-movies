import React from 'react';
import Navbar from '../../Components/Navbar';
import CarouselMovies from '../../Components/Carousel';
import CatalogMovies from '../../Components/Catalog';
import * as S from './style';

const Home = () => {
  return (
    <>
      <S.Container>
        <Navbar />
        <CarouselMovies />
        <S.CentralBar>
          <S.TexTCentralBar>
            <S.Dot />
            <b>CATÁLOGO</b> COMPLETO
          </S.TexTCentralBar>
        </S.CentralBar>
        <CatalogMovies />
      </S.Container>
      <S.Footer>
        <S.FooterText>
          © 2021 Suno Movies. All rights reserved.
          </S.FooterText>
      </S.Footer>
    </>
  )
};

export default Home;
