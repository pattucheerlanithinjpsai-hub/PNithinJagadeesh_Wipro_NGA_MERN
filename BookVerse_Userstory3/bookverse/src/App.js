import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';

// inside <Routes>
<Route path="/add-book" element={<AddBook />} />


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h3>Welcome to BookVerse</h3>
          <Link to="/home">Home</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
