import {useState} from 'react';

const Bookshelf = () => {
 const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
const [newBook, setNewBook]= useState(
    {title: " ", author: " "}
)

const handleInputChange= (event)=>{
setNewBook({...newBook, [event.target.name]: event.target.value})//only updating newBook object

}

const handleSubmit= (event) =>{
  event.preventDefault();
  const updatedSetBooks = [...books, newBook]
  setBooks(updatedSetBooks)
  setNewBook({title: " ", author: " "}
  )
}

      
  return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <label htmlFor='title'>Book Title:</label>
    <input
    onChange={handleInputChange}
    type="text"
    id="title"
    name="title"
    value={newBook.title}
    />

    <label htmlFor='author'>Book Author :</label>
    <input
    onChange={handleInputChange}
    type="text"
    id="author"
    name="author"
    value={newBook.author}
    />

    <button type="submit" onClick={handleSubmit}>Add Book</button>

  </div>
  <div className="bookCardsDiv">
    {books.map((book, index)=>(
      <ul key={index}>
        <li>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>

        </li>

      </ul>
      
    ))
  }
  </div>
</div>

  )
}

export default Bookshelf