'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonExmpProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function ButtonExmp({ children, ...rest }: ButtonExmpProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 w-56 items-center justify-center rounded bg-gray-900 text-center text-base font-medium text-zinc-50'
      )}
    >
      {children}
    </button>
  );
}
