import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  console.log("BookForm called");
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ui input">
        <input
          type={"text"}
          placeholder={"Book title"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="ui divider"></div>
      <div className="ui input">
        <input
          type={"text"}
          placeholder={"Author"}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
      </div>
      <div className="ui divider"></div>
      <button type="submit" className="ui positive button">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
