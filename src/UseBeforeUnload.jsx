// src/useBeforeUnload.js

import { useEffect } from 'react';

const UseBeforeUnload = (message) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [message]);
};

export default UseBeforeUnload;
