import { useEffect, useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
import useFetch from "./useFetch";
function App() {


  let { data, error } = useFetch('http://localhost:8000/books');
  let [books, setBooks] = useState(null);

  useEffect(() => {
    setBooks(data);
  }, [data]);

  function handleRemove(id) {

    fetch(`http://localhost:8000/books/${id}`, {
      method: "DELETE"
    }).then(() => {
      let newBooks = books.filter((element) => {
        return element.id !== id;
      });
      setBooks(newBooks);
    });
  }

  function handleSubmit(book) {
    fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(() => {
        let newBooks = [...books];
        newBooks.push(book);
        setBooks(newBooks);
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  }

  return (
    <div className='main-container'>
      <h1>Book Managment System</h1>
      <AddBook handleSubmit={handleSubmit} />

      {
        books && books.map((book) => {
          return <Book id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            handleRemove={handleRemove}
            books={books}
            setBooks={setBooks} >
          </Book>;
        })}
    </div >

  );
}


export default App;