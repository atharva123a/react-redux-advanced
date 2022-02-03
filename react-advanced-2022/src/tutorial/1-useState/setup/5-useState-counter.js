import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => setCounter(0);

  const complexIncrement = () => {
    //this handler returns asynchronously:
    setTimeout(() => {
      // when we pass in a function, we have access to the previous state and we can refer to that state to update our value:
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Simple Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrement
        </button>
        <button className="btn" onClick={() => resetCounter()}>
          rest
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increment
        </button>
      </section>
      <section style={{ margin: "5rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={complexIncrement}>
          Complex Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
