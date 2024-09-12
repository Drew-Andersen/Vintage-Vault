import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Home from './pages/Home'; // Assuming you have a Home component
import Navbar from './components/navbar/Navbar'; // Assuming Navbar is imported
import SearchResults from './pages/SearchResults'; // Search results component
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<SearchResults />} />
          <Outlet />
        </Routes>
      </div>

      <Footer className="footer" />
    </Router>
  );
}

export default App;
