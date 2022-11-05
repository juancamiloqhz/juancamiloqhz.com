import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalProvider({ children }) {
  const [themePickerOpen, setThemePickerOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        themePickerOpen,
        setThemePickerOpen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node
};
