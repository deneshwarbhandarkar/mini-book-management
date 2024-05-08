import { useState } from "react";
import "./Book.css";

function Book(props) {
    let [idContent, setIdContent] = useState(<span id="book-id">{props.id}</span>);
    let [titleContent, setTitleContent] = useState(<span id="book-title">{props.title}</span>);
    let [authorContent, setAuthorContent] = useState(<span id="book-author">{props.author}</span>);
    let [priceContent, setPriceContent] = useState(<span id="book-price">{props.price}</span>);

    function handleUpdate() {
        setIdContent(<input type="number" id="input-id" />);
        setTitleContent(<input type="text" id="input-title" />);
        setAuthorContent(<input type="text" id="input-author" />);
        setPriceContent(<input type="number" id="input-price" />);
    }




    return (
        <div className="books-container">
            {idContent}
            {titleContent}
            {authorContent}
            {priceContent}
            <button type="button" className="remove-btn" onClick={() => { props.handleRemove(props.id); }} ><span class="material-symbols-outlined">delete
            </span>Remove</button>
            <button type="button" className="update-btn" onClick={handleUpdate} >Update</button>
        </div >
    );
}

export default Book;