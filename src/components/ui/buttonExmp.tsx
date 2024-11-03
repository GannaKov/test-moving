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
        'w-56 rounded bg-gray-900 px-5 py-2.5 text-center text-base font-medium text-zinc-50'
      )}
    >
      {children}
    </button>
  );
}
