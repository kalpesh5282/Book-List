
    import './Books.css';
    import { useState } from 'react';
    function Books(props){
        let[isUpdating, setIsUpdating] = useState(false);
    
        let[updatedId, setUpdatedId] = useState(props.id);
        let[updatedTitle, setUpdatedTitle] = useState(props.title);
        let[updatedAuthor, setUpdatedAuthor] = useState(props.author);
        let[updatedPrice, setUpdatedPrice] = useState(props.price);


        function handleUpdate(){
            let book;
    
            if(isUpdating == true) {
                book = {
                            id: updatedId,
                            title: updatedTitle,
                            author: updatedAuthor,
                            price: updatedPrice
                        }
    
                        fetch(`http://localhost:8000/books/${props.id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(book)
                        })
                        .then(()=>{
                            let newBooks = [...props.books];
    
                        newBooks.map(
                            (element, idx)=>{
                                if(element.id == book.id) {
                                    newBooks.splice(idx, 1, book);
                                }
                            }
                        )
                
                        props.setBooks(newBooks);
                        setIsUpdating(false);
                        })        
            }   
            else{
                setIsUpdating(true);
            }
        }

        
        function handleIdChange(event) {
            setUpdatedId(event.target.value);
        }
        function handleTitleChange(event){
            setUpdatedTitle(event.target.value);
        }

        function handleAuthorChange(event){
            setUpdatedAuthor(event.target.value);
        }


        function handlePriceChange(event){
            setUpdatedPrice(event.target.value);
        }




        return(
            <div className='container'>
                {isUpdating ?
                <input className='input1'
            onChange={handleIdChange} value={updatedId}></input>
                :
                <span className='book-data'>{props.id}</span>
            
            }
            
            {isUpdating ?
            <input className='input2'
            onChange={handleTitleChange}
            value = {updatedTitle}></input>
                :
                <span className='book-data'>{props.title}</span>
            }

            {
                isUpdating ?
                <input className='input3'
                onChange={handleAuthorChange}
                            value = {updatedAuthor}
                ></input>
                :
                <span className='book-data'>{props.author}</span>
            }

            {
                isUpdating ?
                <input className='input4'
                onChange={handlePriceChange}
                value={updatedPrice}></input>
                :
                <span className='book-data'>{props.price}</span>

            }


            <span 
    className="material-symbols-outlined" 
    id="edit-btn" 
    onClick={handleUpdate} 
    style={{ color: isUpdating ? 'green' : 'red' }}
    >
    {isUpdating ? 'save' : 'edit'}
    </span>
            <span class="material-symbols-outlined" id='remove-btn' onClick={()=>{props.handleRemove(props.id)}}>
                delete
            </span>
            

        </div>
        );
    }
    export default Books;