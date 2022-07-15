import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import faker from "@faker-js/faker";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div>
      {books.map((book, index) => (
        <BookDetails book={book} image={faker.image.avatar()} key={index} />
      ))}
    </div>
  ) : (
    <div className="ui middle aligned animated list">
      <div>Nothing to read</div>
    </div>
  );
};

export default BookList;
