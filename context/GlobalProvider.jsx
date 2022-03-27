import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalProvider({ children }) {
  const [themePickerOpen, setThemPickerOpen] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        themePickerOpen,
        setThemPickerOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
