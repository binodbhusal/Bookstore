import React from 'react';
import { PropTypes } from 'prop-types';

const BookItem = ({ bookitem }) => (
  <>

    <li>
      <h2>{bookitem.title}</h2>
      <p>{bookitem.author}</p>
      <button type="button">Remove</button>

    </li>

  </>
);
BookItem.propTypes = {
  bookitem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
