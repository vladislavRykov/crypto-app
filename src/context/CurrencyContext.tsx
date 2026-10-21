import { createContext, useState, useContext, type ReactNode } from "react";
import type { CurrencyT } from "../CoinGeckoTypes";

type CurrencyContextType = {
  currency: CurrencyT;
  setCurrency: (c: CurrencyT) => void;
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<CurrencyT>("usd");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
};
