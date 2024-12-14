import Link from 'next/link';

import ButtonExmp from '@/components/ui/buttonExmp';

export default function TeamSectionSvitlana() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <h1>HI !!! I am SVITLANA TEAM Page</h1>
      <p className="text-xl">Welcome to the SVITLANA TEAM Page.</p>

      <ButtonExmp>
        <Link className="w-full" href={'/design-olga/team'}>
          To Olga
        </Link>
      </ButtonExmp>
    </div>
  );
}
