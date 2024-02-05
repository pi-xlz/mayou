"use client";

import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

type Blind = {
  isBlind: boolean;
  setIsBlind: (arg: React.SetStateAction<boolean>) => void;
};

const BlindContext = createContext<Blind | null>(null);
export const useBlindCtx = () => {
  const context = useContext(BlindContext);

  if (!context) throw new Error("Can't access context outside <main>");
  return context;
};

type ProviderProps = PropsWithChildren;

const BlindContextProvider = ({ children }: ProviderProps) => {
  const [isBlind, setIsBlind] = useState(true);

  return (
    <BlindContext.Provider value={{ isBlind, setIsBlind }}>
      {children}
    </BlindContext.Provider>
  );
};

export default BlindContextProvider;
