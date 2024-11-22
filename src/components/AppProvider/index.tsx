import { LunaAppProvider } from '@luna/react';
import { AppRoot } from '@nmxp/next';
import { createContext } from 'react';
import { AppProviderProps, AppContextProps } from '@/types';

export default function AppProvider (props: AppProviderProps) {
  const { appname, children } = props;

  const context: AppContextProps = { appname };
  
  const AppContext = createContext(context);

  return (
    <LunaAppProvider appname={appname}>
      <AppContext.Provider value={{ appname }}>
        <AppRoot data-app-name={appname}>
          {children}
        </AppRoot>
      </AppContext.Provider>
    </LunaAppProvider>
  );
};
