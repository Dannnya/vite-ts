import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <p> Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  )
};
