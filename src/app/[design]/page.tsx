'use client';
import HomeSectionOlga from '@/components/section/home/designByOlga/HomeSectionOlga';
import HomeSectionSvitlana from '@/components/section/home/designBySvitlana/HomeSectionSvitlana';

import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';

export default function HomePage() {
  const { designType } = useDesignContext();
  console.log('designType', designType);
  return (
    <>
      {designType === 'designByOlga' && <HomeSectionOlga />}
      {designType === 'designBySvitlana' && <HomeSectionSvitlana />}
    </>
  );
}
