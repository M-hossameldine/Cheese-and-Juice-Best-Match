import React, { useRef } from 'react';

const Counts = () => {
  const renderCount = useRef(0);

  return (
    <div className='mt-3'>
      <p className='dark:text-white'>
        Nothing has changed here but I've now rendered:{' '}
        <span className='text-emerald-400'>
          {renderCount.current++} times(s)
        </span>
      </p>
    </div>
  );
};

export default React.memo(Counts);
