import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = (props) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.book.title}</div>
          <div className="meta">{props.book.author}</div>
          <div className="description"></div>
        </div>
        <div
          className="negative ui bottom attached button"
          onClick={() => dispatch({ type: "REMOVE_BOOK", id: props.book.id })}
        >
          <i className="white close icon"></i>
          Remove
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
