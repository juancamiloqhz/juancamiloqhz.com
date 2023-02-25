import { useEffect } from 'react';

// Key handling
export function useKeydown(key, callback) {
  useEffect(() => {
    const handler = function (event) {
      if (event.key === key) {
        callback();
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [key, callback]);
}
