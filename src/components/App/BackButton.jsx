import React from 'react';
import { Link } from 'framework7-react';

const BackButton = () => {
  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <Link onClick={handleBackClick}>
      <div className='flex items-center mt-6 ml-6 relative'>
        {/* First layer */}
        <div className='bg-rose-500 rounded-full p-1 w-11 h-8 px-2 shadow-lg'>
        </div>

        {/* Second layer */}
        <div className='bg-rose-100 rounded-full absolute top-1 left-1 py-1 px-2 shadow-lg'>
          Back
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
