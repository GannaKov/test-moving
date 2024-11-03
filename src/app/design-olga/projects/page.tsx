import Link from 'next/link';
import ButtonExmp from '@/components/ui/buttonExmp';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>HI !!! I am OLGA PROJETS Page</h1>
      <p className="text-xl">Welcome to the PROJETS page.</p>

      <ButtonExmp>
        <Link className="w-full" href={'/design-svitlana/projects'}>
          To Svitlana
        </Link>
      </ButtonExmp>
    </div>
  );
}
