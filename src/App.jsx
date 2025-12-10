import { useState } from 'react';
import Greetings from './components/Greeting';
import './App.css'

function App() {
  let [count , SetCount] = useState(0);

  function increase() {
    SetCount(count + 1)
  }

  function decrease() {
    SetCount(count - 1)
  }

  function reset() {
    SetCount(count = 0)
  }

  return (
    <>

      <h1 className='text-3xl text-center py-5 font-semibold bg-amber-400 text-white'>React Counter</h1>
      
      <p className='text-7xl text-center py-6'>{count}</p>

      <div className='flex justify-around '>

        <button onClick={increase} className='border-2 border-white hover:bg-amber-400 hover:shadow-2xl hover:scale-105 hover:shrink-0 hover:text-black cursor-pointer p-2.5 px-5 mt-3'>Increament!</button>

        <button onClick={decrease} className='border-2 border-white hover:bg-amber-400 hover:shadow-2xl hover:scale-105 hover:shrink-0 hover:text-black cursor-pointer px-5 mt-3'>Decreament!</button>

        <button onClick={reset} className='border-2 border-white hover:bg-amber-400 hover:shadow-2xl hover:scale-105 hover:shrink-0 hover:text-black cursor-pointer px-5 mt-3'>Reset!</button>
      </div>
    </>
  );
}

export default App
