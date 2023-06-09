import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Category from './components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
