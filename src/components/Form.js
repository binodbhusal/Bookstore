import { useDispatch } from 'react-redux';
import { postNewBooks } from '../Redux/books/fetchBooks';
import styles from './Form.module.css';

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
      <h3 className={styles.headerform}>ADD NEW BOOK</h3>
      <form className={styles.bookForm} onSubmit={addNewBook}>
        <input className={styles.bookInput} type="text" name="bookTitle" placeholder="Booktitle" />
        <input className={styles.authorInput} type="text" name="author" placeholder="Author" />
        <select name="category" className={styles.categoryselect}>
          <option disabled selected>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>

        </select>
        <button className={styles.addbtn} type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Addform;
