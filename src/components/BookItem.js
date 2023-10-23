import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeData } from '../Redux/books/fetchBooks';
import styles from './BookItem.module.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeData(book.item_id));
  };
  return (
    <>

      <li className={styles.listbooks}>
        <div className={styles.listSection}>
          <div className={styles.firstcol}>
            <p className={styles.category}>{book.category}</p>
            <h2 className={styles.title}>{book.title}</h2>
            <p className={styles.author}>{book.author}</p>
            <div className={styles.btncontainer}>
              <button className={styles.btncol} type="button">
                Comments
                <span className={styles.vLine}>|</span>
              </button>
              <button className={styles.btncol} type="button" onClick={handleRemove}>
                Remove
                <span className={styles.vLine}>|</span>
              </button>
              <button className={styles.btncol} type="button">Edit</button>
            </div>
          </div>
          <div className={styles.progress}>
            <div className={styles.progressContainer}>
              <div className={styles.progressCircle} />
            </div>
            <div>
              <p className={styles.percent}>64%</p>
              <p className={styles.completed}>Completed</p>
            </div>
          </div>
          <hr className={styles.vLine2} />
          <div className={styles.contentContainer}>
            <div className={styles.chapter}>
              <p className={styles.chaptor}>Current Chapter</p>
              <p className={styles.chaptor17}>Chapter_17</p>
            </div>
            <p><button type="button" className={styles.btn}>UPDATE PROCESS</button></p>

          </div>
        </div>
      </li>
      <hr className={styles.line} />
    </>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

  }).isRequired,
};
export default BookItem;
