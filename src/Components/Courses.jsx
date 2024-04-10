import React, { useState } from 'react';

function Courses(){
  const [count, setCount] = useState(0);
  function add(){
    setCount(count + 1);
  };
  function dec(){
    if (count > 0) {
      setCount(count - 1);
    }
  };
  function zero(){
    if (count > 0) {
      setCount(count *0);
    }
  };

  return (
    <div className="text-center my-10">
        <span className="bg-gray-200 px-4 my-5 rounded-full py-2">{count}</span>
     
      <div className="flex justify-center items-center gap-10">
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={dec}
        >
          -
        </button>
      
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={add}
        >
          +
        </button>
        <button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={zero}
        >
          0
        </button>
      </div>
    </div>
  );
};

export default Courses;
