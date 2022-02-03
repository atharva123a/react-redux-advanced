import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "athens",
    age: 20,
    position: "developer",
  });

  // we can also set them as individuals props:
  const [name, setName] = useState("athens");
  const [age, setAge] = useState(20);
  const [position, setPosition] = useState("developer");

  const handleChange = () => {
    // the spread operator is very imp because otherwise, we won't be able to persist the prev values:
    // setPerson({ ...person, position: "senior developer" });

    setPosition("senior developer");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{position}</h3>
      <button type="button" className="btn" onClick={handleChange}>
        Change Position
      </button>
    </>
  );
};

export default UseStateObject;
