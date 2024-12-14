//app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDesignContext } from '@/app/context/DesignContext';

export default function RootPage() {
  const router = useRouter();
  const { designType } = useDesignContext();
  console.log('in Page', designType);
  useEffect(() => {
    router.push(`/${designType}`);
  }, [designType, router]);
  return <div>Loading...</div>;
}
