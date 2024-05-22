import {  useState } from 'react';
import './Addbook.css';
function Addbook(props){
    let[enteredid,seEnteredId]=useState("");
    let[enteredtitle,setEnteredTitle]=useState("");
    let[enteredauthor,setEnteredAuthor]=useState("");
    let[enteredprice,setEnteredPrice]=useState("");
    
    function handlechangeId(event){
        seEnteredId(event.target.value)

    }
    function handlechangeTitle(event){
        setEnteredTitle(event.target.value)
        
    }
    function handlechangeAuthor(event){
        setEnteredAuthor(event.target.value);

        
    }
    function handlechangePrice(event){
    setEnteredPrice(event.target.value)
        
    }
    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredid,
            title: enteredtitle,
            author: enteredauthor,
            price: enteredprice
        }

        props.handleSubmit(book);

        seEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }
    return(
        <div className='addbook-container'>
                <form action="" onSubmit={handleSubmit}>
                    <label >Id</label><br></br>
                    <input type="number"id='id' required onChange={handlechangeId} value={enteredid} /><br></br>
                    <label>Title</label><br></br>
                    <input type="text"  id='title' required onChange={handlechangeTitle} value={enteredtitle}/><br></br>
                    <label>Author</label><br></br>
                    <input type="text" id='author' required onChange={handlechangeAuthor} value={enteredauthor}/><br></br>
                    <label >Price</label><br></br>
                    <input type="number" id='price' required onChange={handlechangePrice} value={enteredprice}/><br></br>
                    <button className='add-btn'>Add</button>

                </form>
        </div>
    )
}

export default Addbook;