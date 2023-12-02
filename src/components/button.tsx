'use client';
import { ButtonHTMLAttributes, HTMLProps } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...passthrough }) => {
  return (
    <button className="p-1 rounded bg-[#282828] text-white" {...passthrough}>
      {children}
    </button>
  );
};
