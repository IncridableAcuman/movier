import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f14] text-gray-100 flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <ToastContainer theme="dark" position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;