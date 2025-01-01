import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // When the route changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;