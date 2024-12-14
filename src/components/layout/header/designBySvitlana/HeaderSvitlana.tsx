'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface HeaderProps {}
const links = [
  { name: 'HOME SVITLANA', href: '/designBySvitlana' },
  {
    name: 'TEAM SVITLANA',
    href: '/designBySvitlana/team',
  },
  { name: 'PROJECTS SVITLANA', href: '/designBySvitlana/projects' },
];
export default function HeaderSvitlana({}: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="flex w-full justify-center bg-[#8f8ded] px-3 text-white">
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
