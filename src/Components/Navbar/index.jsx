import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import * as S from './style.js'
import Logo from '../../Images/suno-movies.png'
import IconSearch from '../../Images/magnifying-glass.png';
import Button from '../Button'

const Navbar = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [color, setColor] = useState();
  const colorIconCliqued = "invert(37%) sepia(97%) saturate(2412%) hue-rotate(312deg) brightness(99%) contrast(105%)";
  const searchMovies = () => {
    return console.log('digitando...')
  }
  const updateInput = () => {
    if (searchInput) {
      setColor("invert(100%)");
      return setSearchInput(false);
    };  
    setColor(colorIconCliqued);
    return setSearchInput(true);
  }
  useEffect(()=> {
    
  }, [searchInput]);
  return (
    <S.ContainerNav>
      <S.ContainerMenu>
        <S.Image
          src={ Logo }
          alt="logo suno movies"
        />
        <S.ContainerButtons>
          <S.Button>
            <Button
              onClick={ () => <Redirect to="/" />}
            >
              INÍCIO
            </Button>
          </S.Button>
          <S.Button>
            <Button>
              CATÁLOGO
            </Button>
          </S.Button>
          <S.Icon
            invertColor={ color }
            onClick={ () => updateInput()}
            src={ IconSearch }
            alt=" lupa icone"
          />
        </S.ContainerButtons>
      </S.ContainerMenu>
        {!searchInput ? <></> : 
          <S.InputSearch
            type="text"
            onchange={({target}) => searchMovies(target.value)}
          />
        }
    </S.ContainerNav>
  )
};

export default Navbar;
