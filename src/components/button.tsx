'use client';
import { cn } from '@/cn';
import { ButtonHTMLAttributes, HTMLProps } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...passthrough }) => {
  return (
    <button className={cn('p-1 rounded bg-[#282828] hover:bg-[#37393c] text-white', className)} {...passthrough}>
      {children}
    </button>
  );
};
