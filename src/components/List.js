import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import { fetchData } from '../Redux/books/fetchBooks';

const BookList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  if (isError) {
    return <p>is Error...</p>;
  }
  return (
    <ul>
      {data.map((bookitem) => (
        <BookItem key={bookitem.item_id} book={bookitem} />
      ))}
    </ul>
  );
};

export default BookList;
