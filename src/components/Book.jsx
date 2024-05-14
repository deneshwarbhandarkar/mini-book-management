import { useState } from "react";
import "./Book.css";

function Book(props) {
    let [isUpdating, setIsUpdating] = useState(false);
    let [updatedId, setUpdateId] = useState(props.id);
    let [updatedTitle, setUpdatedTitle] = useState(props.title);
    let [updatedAuthor, setUpdatedAuthor] = useState(props.author);
    let [updatedPrice, setUpdatedPrice] = useState(props.price);

    function handleUpdate() {
        let book;
        if (isUpdating === true) {
            book = {
                id: updatedId,
                title: updatedTitle,
                author: updatedAuthor,
                price: updatedPrice
            };
            fetch(`http://localhost:8000/books/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }).then(() => {
                let newBooks = [...props.books];
                newBooks.map((element, idx) => {
                    if (element.id === book.id) {
                        newBooks.splice(idx, 1, book);
                    }
                });
                props.setBooks(newBooks);
                setIsUpdating(false);
            });
        }
        else {
            setIsUpdating(true);
        }
    }

    function handleIdChange(event) {
        setUpdateId(event.target.value);
    }

    function handleTitleChange(event) {
        setUpdatedTitle(event.target.value);
    }

    function handleAuthorChange(event) {
        setUpdatedAuthor(event.target.value);
    }

    function handlePriceChange(event) {
        setUpdatedPrice(event.target.value);
    }




    return (
        <div className="books-container">

            {isUpdating ? <input
                type="number"
                id="input-id"
                onChange={handleIdChange}
                value={updatedId} />
                :
                <span id="book-id">{props.id}</span>}

            {isUpdating ? <input
                type="text"
                id="input-title"
                onChange={handleTitleChange}
                value={updatedTitle} />
                :
                <span id="book-title">{props.title}</span>}

            {isUpdating ? <input
                type="text"
                id="input-author"
                onChange={handleAuthorChange}
                value={updatedAuthor} />
                :
                <span id="book-author">{props.author}</span>}

            {isUpdating ? <input
                type="number"
                id="input-price"
                onChange={handlePriceChange}
                value={updatedPrice} />
                :
                <span id="book-price">{props.price}</span>}

            <button type="button" className="remove-btn" onClick={() => { props.handleRemove(props.id); }} ><span class="material-symbols-outlined">delete
            </span>Remove</button>
            <button type="button" className="update-btn" onClick={handleUpdate} >{isUpdating ? "Save" : "Update"}</button>
        </div >
    );
}

export default Book;