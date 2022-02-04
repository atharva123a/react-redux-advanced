import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // short circuit evaluation plays on and or operators:
  const [text, setText] = useState("athens");
  const first = text || "hello world!";
  const second = text && "hello world!";

  const [isError, setIsError] = useState(false);

  const handleToggle = () => {
    setIsError((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      {/* <h1>{first}</h1> */}
      {/* <h1>value : {second}</h1> */}
      {/* {if(true){console.log('true')}} */}
      <h1>{text || "Athens Badass"}</h1>
      <button className="btn" onClick={handleToggle}>
        toggle {isError ? "message" : "error"}
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>an error occured!</p>
      ) : (
        <div>
          <h2>There is no error!</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
