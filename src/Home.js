import './Home.css'
import Addbook from './Components/Addbook';
import Books from './Components/Books';
import { useEffect, useState} from 'react';
import useFetch from './useFetch';

function Home(){
     


let { data, error } = useFetch('http://localhost:8000/books');
let [books, setBooks] = useState(null);

useEffect(()=>{
    setBooks(data);
}, [data]);

function handleRemove(id){



fetch(`http://localhost:8000/books/${id}`,{
  method:'DELETE'
})
.then(()=>{
  let newBooks=books.filter((elemet)=>{
  return elemet.id!=id;
}
)
setBooks(newBooks);
})




}
function handleSubmit(book) {
  fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
  })
      .then(() => {
          let newBooks = [...books];
          newBooks.push(book);
          setBooks(newBooks);
      })
      .catch(error => {
          console.error('Error adding book:', error);
      });
}

    return( 
        <div className='main'>

<Addbook handleSubmit={handleSubmit}> </Addbook>

                <div className='books-container'>
                  <div className='title'>
                    <span className='titles'>Id</span>
                    <span className='titles'>Title</span>
                    <span className='titles'>Author</span>
                    <span className='titles'>Price</span>
                  </div>

{
        books &&books.map((object)=>{
          return < Books key={object.id}Book id={object.id} title={object.title} author={object.author} price={object.price} handleRemove={handleRemove}books={books} setBooks={setBooks} ></Books>
        })
      }
        </div>
        </div>
    );
}
export default Home;