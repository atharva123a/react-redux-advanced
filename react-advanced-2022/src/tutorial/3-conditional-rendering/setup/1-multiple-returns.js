import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

// we can have multiple return statements inside our return function and can render different components depending upon our condition:
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        setIsLoading(false);
        setUser(user.login);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  // conditional returns:
  if (isLoading) {
    //  we can return whatever html we want to render:
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
