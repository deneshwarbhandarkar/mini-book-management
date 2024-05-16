import { useState } from "react";
import "./AddBook.css";


function AddBook(props) {

    let [enteredId, setEnteredId] = useState("");
    let [enteredTitle, setEnteredTitle] = useState("");
    let [enteredAuthor, setEnteredAuthor] = useState("");
    let [enteredPrice, setEnteredPrice] = useState("");

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }
    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        };

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredPrice("");
        setEnteredTitle("");
        setEnteredAuthor("");
    }

    return (
        <div className="add-book-container">
            <div className="form" >
                <form action="" onSubmit={handleSubmit}>
                    <input type="number" placeholder="Enter ID" required onChange={handleChangeId} value={enteredId} />
                    <input type="text" placeholder="Enter Title" required onChange={handleChangeTitle} value={enteredTitle} />
                    <input type="text" placeholder="Enter Author" required onChange={handleChangeAuthor} value={enteredAuthor} />
                    <input type="number" placeholder="Enter Price" required onChange={handleChangePrice} value={enteredPrice} />
                    <input type="submit" value="+ Add"  ></input>

                </form>
            </div>
        </div>
    );
}


export default AddBook;