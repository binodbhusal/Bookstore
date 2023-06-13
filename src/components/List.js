import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((bookitem) => (
        <BookItem key={bookitem.id} book={bookitem} />
      ))}
    </ul>
  );
};

export default BookList;
