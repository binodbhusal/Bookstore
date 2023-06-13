import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(book.id));
  };
  return (
    <>

      <li>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button type="button" onClick={handleRemove}>Remove</button>

      </li>

    </>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
