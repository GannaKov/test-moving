import Link from 'next/link';

import ButtonExmp from '@/components/ui/buttonExmp';

export default function ProjectsSectionSvitlana() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>
        HI !!! I am <span className="text-xl font-bold">SVITLANA</span> PROJETS
        Page
      </h1>
      <p className="text-xl">Welcome to the SVITLANA PROJETS Page</p>

      <ButtonExmp>
        <Link className="w-full" href={'/design-olga/projects'}>
          To Olga
        </Link>
      </ButtonExmp>
    </div>
  );
}
