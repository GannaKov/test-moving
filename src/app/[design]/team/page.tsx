'use client';
import React from 'react';
import { useDesignContext } from '../../context/DesignContext';
import TeamSectionOlga from '@/components/section/team/designByOlga/TeamSectionOlga';
import TeamSectionSvitlana from '@/components/section/team/designBySvitlana/TeamSectionSvitlana';

// Can be so!!!!
// export default function TeamPage({ params }: TeamPageProps) {
//   const designType = params.design[0]; // 'designByOlga' или 'designBySvitlana'

//   if (designType === 'designByOlga') return <TeamSectionOlga />;
//   if (designType === 'designBySvitlana') return <TeamSectionSvitlana />;

//   return <div>Design not found</div>;
// }
export default function TeamPage() {
  const { designType } = useDesignContext();
  return (
    <>
      {designType === 'designByOlga' && (
        <>
          <TeamSectionOlga />
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <TeamSectionSvitlana />
        </>
      )}
    </>
  );
}
