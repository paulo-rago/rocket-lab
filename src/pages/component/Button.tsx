import React from 'react';
import type { ButtonProps } from '../../types/Button';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const base = 'rounded px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-[#00363d] text-white hover:bg-[#00272e] focus:ring-[#00363d]',
    secondary: 'bg-[#00363d] text-white hover:bg-[#00272e] focus:ring-[#00363d]',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
