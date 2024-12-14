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
    if (typeof window !== 'undefined') {
      return (
        (localStorage.getItem('designType') as DesignType) || 'designByOlga'
      );
    }
    return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
  });
  console.log('designType in Context', designType);
  useEffect(() => {
    localStorage.setItem('designType', designType);
  }, [designType]);

  return (
    <DesignContext.Provider value={{ designType, setDesignType }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesignContext() {
  console.log('in useContext 1');
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesignContext must be used within a DesignProvider');
  }
    console.log('in useContext 2');
  return context;
}
