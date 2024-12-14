'use client';
import ProjectsSectionOlga from '@/components/section/projects/designByOlga/ProjectsSectionOlga';
import ProjectsSectionSvitlana from '@/components/section/projects/designBySvitlana/ProjectsSectionSvitlana';
import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';

// interface ProjectsPageProps {
//   params: { design: string[] };
// }

export default function ProjectsPage() {
  const { designType } = useDesignContext();
  return (
    <>
      {designType === 'designByOlga' && (
        <>
          <ProjectsSectionOlga />
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <ProjectsSectionSvitlana />
        </>
      )}
    </>
  );
}
