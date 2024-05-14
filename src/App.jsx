import { useEffect, useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
function App() {

  let [enteredId, setEnteredId] = useState("");
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAuthor, setEnteredAuthor] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [books, setBooks] = useState(null);


  //Fetching database file using API 
  useEffect(() => {
    fetch("http://localhost:8000/books").then((response) => {
      return response.json();
    }).then((data) => {
      setBooks(data);
      console.log(data);
    });

  }, []);
  function handleRemove(id) {
    /*
    let newBooks = books.filter((element) => {
      return element.id !== id;
    });
    setBooks(newBooks);
    <h1>Book Managment System</h1>;
    setTimeout(() => {
      alert("Book Removed Successfully.!!");
    }, 50);
    */
    fetch(`http://localhost:8000/books/${id}`, {
      method: "DELETE"
    }).then(() => {
      let newBooks = books.filter((element) => {
        return element.id !== id;
      });
      setBooks(newBooks);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let book = {
      id: enteredId,
      title: enteredTitle,
      author: enteredAuthor,
      price: enteredPrice
    };

    //Sending data to database.json file
    fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then(() => {
      let newBooks = [...books];
      newBooks.push(book);
      setBooks(newBooks);
      setEnteredId("");
      setEnteredTitle("");
      setEnteredAuthor("");
      setEnteredPrice("");
    });
  }

  return (
    <div className='main-container'>
      <h1>Book Managment System</h1>
      <AddBook handleSubmit={handleSubmit}
        setEnteredId={setEnteredId}
        setEnteredTitle={setEnteredTitle}
        setEnteredAuthor={setEnteredAuthor}
        setEnteredPrice={setEnteredPrice}
        enteredId={enteredId}
        enteredTitle={enteredTitle}
        enteredAuthor={enteredAuthor}
        enteredPrice={enteredPrice} ></AddBook>

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