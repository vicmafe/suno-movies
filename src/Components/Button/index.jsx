import React from 'react';
import SButton from './style';

const Button = ({ type, disabled, onClick, children, color, txtColor }) => (
  <SButton
    type={ type }
    disabled={ disabled }
    onClick={ onClick }
    style={ { backgroundColor: color, color: txtColor } }
  >
    { children }
  </SButton>
);

export default Button;
