import "./Book.css";

function Book(props) {
    return (
        <div className="books-container">
            <span id="book-id">{props.id}</span>
            <span id="book-title">{props.title}</span>
            <span id="book-author">{props.author}</span>
            <span id="book-price">{props.price}</span>
            <button type="button" className="remove-btn" onClick={() => { props.handleRemove(props.id); }} ><span class="material-symbols-outlined">delete
            </span>Remove</button>
        </div>
    );
}

export default Book;