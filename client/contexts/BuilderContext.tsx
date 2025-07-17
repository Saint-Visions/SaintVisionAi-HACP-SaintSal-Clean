import { createContext, useContext, ReactNode } from 'react';

interface BuilderContextType {
  apiKey: string;
  model: string;
}

const BuilderContext = createContext<BuilderContextType>({
  apiKey: '065997bd13e4442e888a08652fcd61ba',
  model: 'page'
});

export const useBuilder = () => useContext(BuilderContext);

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BuilderContext.Provider value={{ apiKey: '065997bd13e4442e888a08652fcd61ba', model: 'page' }}>
      {children}
    </BuilderContext.Provider>
  );
};
