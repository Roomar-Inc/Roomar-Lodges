// Loading.jsx
import React, { useEffect, useState } from 'react';
import { ReactComponent as RLogo } from '../../../resources/spin-logo.png';

const Loading = ({ setLoading }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
      setLoading(false); // Notify the parent component that loading is complete
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`bg-[#e11d48] ${loadingComplete ? 'hidden' : ''}`}>
      <RLogo className="loading-logo animate-spin" />
    </div>
  );
};

export default Loading;
