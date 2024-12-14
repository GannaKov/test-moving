'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type DesignType = 'designByOlga' | 'designBySvitlana';

interface DesignContextProps {
  designType: DesignType;
  setDesignType: (type: DesignType) => void;
}

const DesignContext = createContext<DesignContextProps | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [designType, setDesignType] = useState<DesignType>(() => {
    // From local Storage or random
    //if (typeof window !== 'undefined') {
    // const storedDesign = localStorage.getItem('designType') as DesignType;
    // return (
    //   storedDesign ||
    //   (Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana')
    // }
    // return 'designByOlga'; // by default
    return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
  });
  console.log('designType in Context', designType);
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
