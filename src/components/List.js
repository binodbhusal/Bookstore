import BookItem from './BookItem';
import Data from './Data';

const BookList = () => (
  <ul>
    {Data.map((item) => (
      <BookItem key={item.id} bookitem={item} />
    ))}
  </ul>
);

export default BookList;
