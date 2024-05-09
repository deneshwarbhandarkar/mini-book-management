import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
function App() {

  let [enteredId, setEnteredId] = useState("");
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAuthor, setEnteredAuthor] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [books, setBooks] = useState([
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: '400'
    },
    {
      id: 2,
      title: "One Piece",
      author: "Eichiro Oda",
      price: "600"
    },
    {
      id: 3,
      title: "Naruto",
      author: "Kishimoto",
      price: "300"
    },
    {
      id: 4,
      title: "Vagabond",
      author: "Takehito Inoue",
      price: "800"
    }
  ]);

  function handleRemove(id) {
    let newBooks = books.filter((element) => {
      return element.id !== id;
    });
    setBooks(newBooks);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let book = {
      id: enteredId,
      title: enteredTitle,
      author: enteredAuthor,
      price: enteredPrice
    };

    let newBooks = [...books];
    newBooks.push(book);

    setBooks(newBooks);
  }

  return (
    <div className='main-container'>
      <AddBook handleSubmit={handleSubmit}
        setEnteredId={setEnteredId}
        setEnteredTitle={setEnteredTitle}
        setEnteredAuthor={setEnteredAuthor}
        setEnteredPrice={setEnteredPrice} />

      {books.map((book) => {
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
