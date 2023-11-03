import React, {
  ReactElement, createContext, useMemo, useState,
} from 'react';

interface IContext {
  name: string;
  setName: (name: string) => void;
}

export const Context = createContext<IContext>({
  name: '',
  setName: () => {},
});

export function Provider({ children }: React.PropsWithChildren): ReactElement {
  const [name, setName] = useState('');

  const contextValue = useMemo(() => ({
    name,
    setName,
  }), [name]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
