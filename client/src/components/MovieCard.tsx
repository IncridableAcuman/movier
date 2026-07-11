import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Movie } from '../types';

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-[#1a1a24] rounded-xl overflow-hidden shadow-lg group relative"
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative aspect-2/3 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
            <p className="text-sm text-gray-300 line-clamp-3">{movie.overview}</p>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-red-500 transition">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
            <span>{new Date(movie.release_date).getFullYear() || 'N/A'}</span>
            <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded">
              <Star className="w-3 h-3 fill-yellow-500" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}