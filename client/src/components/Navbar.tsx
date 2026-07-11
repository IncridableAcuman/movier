import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Film } from 'lucide-react';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/search?q=${search}`);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f0f14]/80 border-b border-gray-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-red-550 font-black text-2xl tracking-wider text-red-600">
          <Film className="w-7 h-7" /> MOVIER
        </Link>
        
        <form onSubmit={handleSearch} className="relative w-64 md:w-80">
          <input
            type="text"
            placeholder="Kino qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1a1a24] text-sm text-gray-200 pl-10 pr-4 py-2 rounded-full border border-gray-800 focus:outline-none focus:border-red-600 transition"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
        </form>
      </div>
    </nav>
  );
}