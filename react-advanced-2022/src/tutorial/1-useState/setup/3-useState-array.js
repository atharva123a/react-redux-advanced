import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
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
