import "./styles.css";
import React, { useState } from "react";

var books = {
  Fiction: [
    {
      title: "Harry Potter series",
      rating: "4.7/5"
    },
    {
      title: "The Lord of the Rings",
      rating: "4.4/5"
    }
  ],

  NonFiction: [
    {
      title: "Fear not: Be Strong",
      rating: "4.6/5"
    },
    {
      title: "The Era of the Darkness",
      rating: "4.4/5"
    }
  ]
};

var booksDist = Object.keys(books);

export default function App() {
  var [book, setBook] = useState("Fiction");

  function bookInputHandler(bookCategory) {
    setBook(bookCategory);
  }
  return (
    <div className="App">
      <h1 className="heading">Book Recommended</h1>
      <div>
        {booksDist.map((bookCategory) => (
          <button
            className="btn-book"
            key={bookCategory}
            onClick={() => bookInputHandler(bookCategory)}
          >
            {bookCategory}{" "}
          </button>
        ))}
      </div>

      <div>
        {Object.values(books[book]).map((b) => {
          var title = b.title;
          var rating = b.rating;

          return (
            <div>
              <h2 className="tilte">{title} </h2>
              <h3 rating="rating"> {rating} </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
