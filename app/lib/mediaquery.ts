import { useState, useEffect } from 'react';

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let mediaQueryList;
    let mql: any;

    const updateMatches = () => {
      setMatches(mql.matches);
    };

    if (typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined') {
      mediaQueryList = window.matchMedia(query);
      mql = mediaQueryList;

      updateMatches();

      const listener = () => {
        updateMatches();
      };

      mql.addListener(listener);

      return () => {
        mql.removeListener(listener);
      };
    } else {
      // Fallback for environments where matchMedia is not supported
      console.warn('window or matchMedia not available, returning default matches value');
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
