import React, { useState, useEffect } from "react";

// a case where importance of clean up function becomes evident:
const ShowHide = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button className="btn" onClick={toggleShow}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    // cleanup becomes very imp because we keep on toggling the item here:
    return () => {
      window.removeEventListener("resize", useEffect);
    };
  }, []);
  return (
    <div>
      <h2>Window</h2>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
