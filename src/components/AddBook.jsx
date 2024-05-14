import "./AddBook.css";


function AddBook(props) {

    function handleChangeId(event) {
        props.setEnteredId(event.target.value);
    }
    function handleChangeTitle(event) {
        props.setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        props.setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        props.setEnteredPrice(event.target.value);
    }


    return (
        <div className="add-book-container">
            <div className="form" >
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="number" placeholder="Enter ID" required onChange={handleChangeId} value={props.enteredId} />
                    <input type="text" placeholder="Enter Title" required onChange={handleChangeTitle} value={props.enteredTitle} />
                    <input type="text" placeholder="Enter Author" required onChange={handleChangeAuthor} value={props.enteredAuthor} />
                    <input type="number" placeholder="Enter Price" required onChange={handleChangePrice} value={props.enteredPrice} />
                    <input type="submit" value="+ Add"  ></input>

                </form>
            </div>
        </div>
    );
}


export default AddBook;