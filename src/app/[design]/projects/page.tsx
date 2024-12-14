'use client';
import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';
import ProjectsSectionOlga from '@/components/section/projects/designByOlga/ProjectsSectionOlga';
import ProjectsSectionSvitlana from '@/components/section/projects/designBySvitlana/ProjectsSectionSvitlana';

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
