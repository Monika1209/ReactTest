import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 

  return (
    <div className="text-center mt-5">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
