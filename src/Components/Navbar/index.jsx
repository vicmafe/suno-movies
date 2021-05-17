import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
import Logo from '../../Images/suno-movies.png';
import IconSearch from '../../Images/magnifying-glass.png';
import Button from '../Button';
import AppContext from '../../Context/AppContext';

const Navbar = () => {
  const { setShowCatalog } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(false);
  const [color, setColor] = useState();
  const colorIconCliqued = "invert(37%) sepia(97%) saturate(2412%) hue-rotate(312deg) brightness(99%) contrast(105%)";

  const searchMovies = () => {
    return console.log('digitando...')
  };

  const updateInput = () => {
    if (searchInput) {
      setColor("invert(100%)");
      return setSearchInput(false);
    };
    setColor(colorIconCliqued);
    return setSearchInput(true);
  };

  return (
    <S.ContainerNav>
      <S.ContainerMenu>
        <S.Image
          src={Logo}
          alt="logo suno movies"
        />
        <S.ContainerButtons>
          <S.Button>
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
            >
            <Button>
                INÍCIO
            </Button>
            </Link>
          </S.Button>
          <S.Button>
            <Button
              onClick={() => setShowCatalog(true)}
            >
              CATÁLOGO
            </Button>
          </S.Button>
          <S.Icon
            invertColor={color}
            onClick={() => updateInput()}
            src={IconSearch}
            alt=" lupa icone"
          />
        </S.ContainerButtons>
      </S.ContainerMenu>
      {!searchInput ? <></> :
        <S.InputSearch
          type="text"
          onchange={({ target }) => searchMovies(target.value)}
        />
      }
    </S.ContainerNav>
  )
};

export default Navbar;
