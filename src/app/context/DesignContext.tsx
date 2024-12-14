'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  // useEffect,
} from 'react';
import { usePathname } from 'next/navigation';

type DesignType = 'designByOlga' | 'designBySvitlana';

interface DesignContextProps {
  designType: DesignType;
  setDesignType: (type: DesignType) => void;
}

const DesignContext = createContext<DesignContextProps | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const segments = pathname?.split('/');

  const designFromURL = segments?.[1] as DesignType;
  const [designType, setDesignType] = useState<DesignType>(() => {
    //
    //// var 1 local Storage or random
    //if (typeof window !== 'undefined') {
    // const storedDesign = localStorage.getItem('designType') as DesignType;
    // return (
    //   storedDesign ||
    //   (Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana')
    // }
    // return 'designByOlga'; // by default
    ////var 2 only random
    // return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
    //// var 3 check pathname
    if (
      designFromURL === 'designByOlga' ||
      designFromURL === 'designBySvitlana'
    ) {
      return designFromURL;
    }

    return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
  });
  console.log('designType in context', designType);
  // for local storage
  // useEffect(() => {
  //   localStorage.setItem('designType', designType);
  // }, [designType]);

  return (
    <DesignContext.Provider value={{ designType, setDesignType }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesignContext() {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesignContext must be used within a DesignProvider');
  }

  return context;
}
