//app/[design]/page.tsx
'use client';
import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';
import HomeSectionOlga from '@/components/section/home/designByOlga/HomeSectionOlga';
import HomeSectionSvitlana from '@/components/section/home/designBySvitlana/HomeSectionSvitlana';

export default function HomePage() {
  const { designType } = useDesignContext();

  return (
    <>
      {designType === 'designByOlga' && <HomeSectionOlga />}
      {designType === 'designBySvitlana' && <HomeSectionSvitlana />}
    </>
  );
}
