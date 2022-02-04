import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <React.Fragment>
      <h1>Width:</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanUp;
