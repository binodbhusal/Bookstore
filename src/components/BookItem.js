import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeData } from '../Redux/books/fetchBooks';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeData(book.item_id));
  };
  return (
    <>

      <li>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <h3>{book.category}</h3>
        <button type="button" onClick={handleRemove}>Remove</button>

      </li>

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
