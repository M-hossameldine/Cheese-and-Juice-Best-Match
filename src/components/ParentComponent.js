import { useState, useEffect } from 'react';
import Counts from './Counts';
import Button from './Button';
import constants from '../utils/constants';

const { MOZARELLA, CHEDDAR, PARMESAN, APPLE, ORANGE, GRAPE } = constants;

const ParentComponent = (props) => {
  const [cheeseType, setCheeseType] = useState('');
  const [juice, setJuice] = useState('');

  const whichJuiceGoesBest = () => {
    switch (cheeseType) {
      case MOZARELLA:
        return setJuice(APPLE);
      case CHEDDAR:
        return setJuice(ORANGE);
      case PARMESAN:
        return setJuice(GRAPE);
      default:
        return APPLE;
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      whichJuiceGoesBest();
    }
    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h3 className='text-center text-gray-300 mt-10'>With React.memo()</h3>
      <h1 className='font-semibold text-2xl dark:text-white max-w-md text-center'>
        select a cheese and we will tell you whick Juice goes best!
      </h1>
      <div className='flex flex-col gap-4 mt-10'>
        <Button text={MOZARELLA} onClick={() => setCheeseType(MOZARELLA)} />
        <Button text={CHEDDAR} onClick={() => setCheeseType(CHEDDAR)} />
        <Button text={PARMESAN} onClick={() => setCheeseType(PARMESAN)} />
      </div>
      {cheeseType && (
        <p className='mt-5 text-emerald-400 font-semibold'>
          For {cheeseType}, <span className='text-orange-300'>{juice}</span>{' '}
          goes best.
        </p>
      )}
      <Counts />
    </div>
  );
};

export default ParentComponent;
