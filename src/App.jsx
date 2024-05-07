import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
function App() {

  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [price, setPrice] = useState("");

  let [books, setBooks] = useState([
    {
      id: 1,
      title: "Dragon Ball",
      author: "Akira Toriyama",
      price: '400/- Rs'
    },
    {
      id: 2,
      title: "One Piece",
      author: "Eichiro Oda",
      price: "600/- Rs"
    },
    {
      id: 3,
      title: "Naruto",
      author: "Kishimoto",
      price: "300/- Rs"
    },
    {
      id: 4,
      title: "Vagabond",
      author: "Takehito Inoue",
      price: "800/- Rs"
    }
  ]);

  function handleRemove(id) {
    let newBooks = books.filter((element) => {
      return element.id !== id;
    });
    setBooks(newBooks);
  }
  function handleSubmit() {

  }

  return (
    <div className='main-container'>
      <AddBook handleSubmit={handleSubmit}
        setId={setId}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPrice={setPrice} />

      {books.map((book) => {
        return <Book id={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
          handleRemove={handleRemove}></Book>;
      })}
    </div>
  );
}

export default App;
