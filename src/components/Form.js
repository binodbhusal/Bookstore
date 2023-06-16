import { useDispatch } from 'react-redux';
import { postNewBooks } from '../Redux/books/fetchBooks';

const Addform = () => {
  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const title = e.target.elements.bookTitle.value;
    const author = e.target.elements.author.value;
    const category = e.target.elements.category.value;
    const itemId = Date.now().toString();
    dispatch(postNewBooks({
      itemId, title, author, category,
    }));
  };
  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={addNewBook}>
        <input type="text" name="bookTitle" placeholder="Booktitle" />
        <input type="text" name="author" placeholder="Author" />
        <select name="category">
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>

        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Addform;
