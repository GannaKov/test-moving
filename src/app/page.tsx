'use client';
import { useEffect, useState } from 'react';

import ButtonExmp from '../components/ui/buttonExmp';
import Link from 'next/link';

export default function Home() {
  const [selectedLink, setSelectedLink] = useState<string>('');

  useEffect(() => {
    const randomVariant = Math.random() < 0.5 ? 'olga' : 'svitlana';
    const svitlanaLink = '/design-svitlana';
    const olgaLink = '/design-olga';

    let link = randomVariant === 'olga' ? olgaLink : svitlanaLink;

    setSelectedLink(link);
  }, []);

  return (
    <body>
      <main>
        <div className="flex min-h-screen justify-center">
          <div className="flex min-h-screen flex-col items-center justify-center p-6">
            <h1 className="mb-2">ПРИВІТ</h1>
            <h2 className="mb-2">У нас є два чудові дизайни</h2>
            <h3 className="mb-2">Зараз ми виберемо для тебе</h3>
            <p className="mb-2 text-xl">
              Але потім ти обов&apos;язково натисніть на таку кнопку 👉{' '}
              <span className="h-10 w-20 border border-slate-800">
                Зразок кнопки
              </span>
            </p>
            <p className="text-l mb-2">І подивися нашу іншу версію</p>
            <ButtonExmp>
              <Link className="w-full" href={selectedLink}>
                Поїхали
              </Link>
            </ButtonExmp>
          </div>
        </div>
      </main>
    </body>
  );
}
