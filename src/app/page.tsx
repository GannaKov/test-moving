'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDesignContext } from '@/app/context/DesignContext';

export default function RootPage() {
  const router = useRouter();
  const { designType } = useDesignContext();
  console.log('in Page', designType);
  useEffect(() => {
    // //
    // if (!designType) {
    //   const randomDesign =
    //     Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
    //   router.push(`/${randomDesign}`);
    // } else {
    router.push(`/${designType}`);
    // }
  }, [designType, router]);
  return <div>Loading...</div>;
}
