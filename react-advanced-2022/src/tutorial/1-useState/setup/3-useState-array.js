import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteItem = (id) => {
    // here we explictly define what the new array is going to look like:
    // let newList = people.filter((person) => person.id !== id);

    // if we passed a function to setPeople:
    setPeople((prevState) => {
      // we return in this fashion:
      return prevState.filter((person) => person.id !== id);
    });
    // implict way of doing it:
    // setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      {people.map((person) => {
        return (
          <div className="container" key={person.id}>
            <h4 className="item">
              {person.name}
              <button
                className="btn"
                // callback for the same exact reason as below:
                onClick={() => {
                  deleteItem(person.id);
                }}
              >
                delete item
              </button>
            </h4>
          </div>
        );
      })}
      {/* clears our list: */}
      <button
        className="btn"
        // here we have a callback so that the func is triggered only when we click:
        onClick={() => {
          setPeople([]);
        }}
      >
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
