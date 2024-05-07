import "./AddBook.css";


function AddBook(props) {

    function handleChangeId(event) {
        props.setId(event.target.value);
    }
    function handleChangeTitle(event) {
        props.setTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        props.setAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        props.setprice(event.target.value);
    }


    return (
        <div className="add-book-container">
            <div className="form" >
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="number" placeholder="Enter ID" required onChange={handleChangeId} />
                    <input type="text" placeholder="Enter Title" required onChange={handleChangeTitle} />
                    <input type="text" placeholder="Enter Author" required onChange={handleChangeAuthor} />
                    <input type="number" placeholder="Enter Price" required onChange={handleChangePrice} />
                    <input type="submit" value="+ Add"  ></input>

                </form>
            </div>
        </div>
    );
}


export default AddBook;