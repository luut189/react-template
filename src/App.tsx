import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='m-10 box-border flex h-screen items-center justify-center bg-blue-100 font-poppins'>
      <div
        onClick={handleClick}
        className='m-auto flex w-1/6 cursor-pointer items-center justify-center rounded-lg bg-slate-50 p-2 shadow-md transition-colors hover:bg-slate-200'>
        {count}
      </div>
    </div>
  );
}
