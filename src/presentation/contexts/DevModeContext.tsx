import { ReactNode, createContext, useContext, useState } from 'react';

interface DevModeContextType {
  isDevMode: boolean;
  toggleDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

interface DevModeProviderProps {
  children: ReactNode;
}

export function DevModeProvider({ children }: DevModeProviderProps) {
  const [isDevMode, setIsDevMode] = useState(false);

  const toggleDevMode = () => {
    setIsDevMode((prev) => !prev);
  };

  return (
    <DevModeContext.Provider value={{ isDevMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  
  if (context === undefined) {
    throw new Error('useDevMode must be used within a DevModeProvider');
  }
  
  return context;
} 