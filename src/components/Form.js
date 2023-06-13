import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/booksSlice';

const Addform = () => {
  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const title = e.target.elements.bookTitle.value;
    const author = e.target.elements.author.value;
    dispatch(addBook({ title, author }));
  };
  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={addNewBook}>
        <input type="text" name="bookTitle" placeholder="Booktitle" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Addform;
