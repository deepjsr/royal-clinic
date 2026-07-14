import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { flushSync } from 'react-dom';

export default function ViewTransitions({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }

    if (location.pathname === displayLocation.pathname) {
      setDisplayLocation(location);
      return;
    }

    if (typeof document.startViewTransition !== 'function') {
      setDisplayLocation(location);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setDisplayLocation(location);
      });
    });
  }, [location, displayLocation]);

  return children(displayLocation);
}
