import { createContext, ReactNode } from "react";


// CreateContext takes last resort fallback as an argument
export const AppContext = createContext({})

interface AppProviderProps {
  children: ReactNode;
}



export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}