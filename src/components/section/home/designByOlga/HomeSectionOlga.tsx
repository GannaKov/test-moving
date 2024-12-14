import Link from 'next/link';
import ButtonExmp from '@/components/ui/buttonExmp';

export default function HomeSectionOlga() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>HI !!! I am OLGA Home Page</h1>
      <p className="text-xl">Welcome to the home page.</p>

      <ButtonExmp>
        <Link className="w-full" href={'/design-svitlana'}>
          To Svitlana
        </Link>
      </ButtonExmp>
    </div>
  );
}
