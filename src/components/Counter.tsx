import { type FC, useContext } from 'react';
import { MyContext } from '../context/MyContext';

export const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
};
