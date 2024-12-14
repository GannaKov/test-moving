'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface HeaderProps {}
const links = [
  { name: 'HOME OLGA', href: '/design-olga' },
  {
    name: 'TEAM OLGA',
    href: '/design-olga/team',
  },
  { name: 'PROJECTS OLGA', href: '/design-olga/projects' },
];
export default function HeaderOlga({}: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="flex w-full justify-center px-3">
      <nav className="flex w-3/4 justify-between">
        {links.map((link) => (
          <Link
            className={clsx('py-4', {
              'bg-sky-100 text-blue-600': pathname === link.href,
            })}
            href={link.href}
            key={link.name}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
