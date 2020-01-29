import React, { useEffect, useState } from 'react'

export const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://michel-book-api.herokuapp.com/books/sort/rating")
      .then(res => res.json())
      .then(json => {
        setBooks(json)
      })
  },[])


  return (
    <div className="main-container">
      <h1>Top 20 Books <span role="img" aria-label="books">📚</span></h1>
      <section className="books-list">
        {books.slice(0,20).map((book, index) => (
          <div 
            className="book-box"
            key={book.bookID}
          >
            <h4><span className="highlight"># {index+1}</span></h4>
            <h4><span className="highlight">Title:</span> {book.title}</h4>
            <h4><span className="highlight">Authors:</span> {book.authors}</h4>
            <h4><span className="highlight">Average rating:</span> {book.average_rating} / 5.00 
              ({book.ratings_count} votes) | {book.text_reviews_count} reviews</h4>
            <h4><span className="highlight">Number of pages:</span> {book.num_pages}</h4>
          </div>
        ))}
      </section>
    </div>
  )
}
