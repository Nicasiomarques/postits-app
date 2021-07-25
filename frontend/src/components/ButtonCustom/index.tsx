import React from 'react';

import './ButtonCustom.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonCustom: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}
  </button>
)