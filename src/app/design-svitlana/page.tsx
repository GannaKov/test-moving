import Link from 'next/link';

import ButtonExmp from '@/components/ui/buttonExmp';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>HI !!! I am SVITLANA Home Page</h1>
      <p className="text-xl">Welcome to the home page.</p>

      <ButtonExmp disabled>
        <Link href={'/design-olga'}>To Olga</Link>
      </ButtonExmp>
    </div>
  );
}
