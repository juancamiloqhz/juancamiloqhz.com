import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : 'dark'
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    console.log('rininn');
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    console.log(root);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
