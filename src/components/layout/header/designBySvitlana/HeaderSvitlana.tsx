'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface HeaderProps {}
const links = [
  { name: 'HOME SVITLANA', href: '/design-svitlana' },
  {
    name: 'TEAM SVITLANA',
    href: '/design-svitlana/team',
  },
  { name: 'PROJECTS SVITLANA', href: '/design-svitlana/projects' },
];
export default function HeaderSvitlana({}: HeaderProps) {
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
