import React from 'react';
import * as S from './style.js'
import Logo from '../../Images/suno-movies.png'
import IconSearch from '../../Images/magnifying-glass.svg';

const Navbar = () => {
  return (
    <S.Container>
      <S.Image
        src={ Logo }
        alt="logo suno movies"
      />
      <S.Icon
        src={ IconSearch }
      />
    </S.Container>
  )
};

export default Navbar;
