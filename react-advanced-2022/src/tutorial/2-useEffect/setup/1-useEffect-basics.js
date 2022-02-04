import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`Only when value updates: ${value}`);
    if (value >= 1) {
      document.title = `New Messages : (${value})`;
    }
  }, [value]);

  useEffect(() => {
    // this will only be called on the first render:
    console.log("only once!");
  }, []);

  return (
    <>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => setValue((prevState) => prevState + 1)}
      >
        Click me!
      </button>
    </>
  );
};

export default UseEffectBasics;
