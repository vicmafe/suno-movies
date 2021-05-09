import React from 'react';
import SButton from './style';

const Button = ({ disabled, onClick, children, color, txtColor }) => (
  <SButton
    type="button"
    disabled={ disabled }
    onClick={ onClick }
    style={ { backgroundColor: color, color: txtColor } }
  >
    { children }
  </SButton>
);

export default Button;
