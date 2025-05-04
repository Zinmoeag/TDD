import React, { createContext, useCallback, useState } from "react";

const TabContainerContext = createContext<any>(null);

type ITabProviderProps = {
  children: React.ReactNode;
  activeTab?: string | number;
};

const TabProvider = ({ children, activeTab = "1" }: ITabProviderProps) => {
  const [value, setValue] = useState(activeTab);

  const handleTabChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <TabContainerContext.Provider value={{ value, handleTabChange }}>
      {children}
    </TabContainerContext.Provider>
  );
};

export const useTabContainerContext = () => {
  const context = React.useContext(TabContainerContext);
  if (!context) {
    throw new Error("useTabContainerContext must be used within a TabProvider");
  }
  return context;
};

export default TabProvider;
