import Link from 'next/link';
import ButtonExmp from '@/components/ui/buttonExmp';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>HI !!! I am OLGA TEAM Page</h1>
      <p className="text-xl">Welcome to the Olga Team page.</p>

      <ButtonExmp>
        <Link className="w-full" href={'/design-svitlana/team'}>
          To Svitlana
        </Link>
      </ButtonExmp>
    </div>
  );
}
