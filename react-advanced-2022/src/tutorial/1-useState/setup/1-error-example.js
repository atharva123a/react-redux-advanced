import React from "react";

const ErrorExample = () => {
  let title = "random title";
  // this function updates our title but the changes are not reflected because we have no way of persisting that change
  const handleChange = () => {
    title = "New Title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleChange}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
