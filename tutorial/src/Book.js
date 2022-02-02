// this is a default export and when importing we can use as whatever we like!

import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  const handleOnClick = () => {
    alert("Hello there!");
  };
  const handleAuthorClick = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

export default Book;
