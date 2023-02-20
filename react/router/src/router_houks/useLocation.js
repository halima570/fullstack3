

import { useLocation } from 'react-router-dom';

export default function Uselocation() {
  const location = useLocation();

  return (
    <div>
      Current URL: {location.pathname}
    </div>
  );
};
{/* useLocation: This hook returns the current location object,
 which contains information about the current URL, such as the pathname, search, and hash.*/}