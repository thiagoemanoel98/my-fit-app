import React, { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const DataContext = createContext({});

export const DataProvider: React.FC<Props> = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("use into of Data Context");

  return context;
};
