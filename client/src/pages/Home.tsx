import { useEffect, useState } from 'react';
import { movieService } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types';

export default function Home() {
  const [heroMovie, setHeroMovie] = useState<Movie | null>(null);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nowPlayingRes, popularRes, topRes, upcomingRes] = await Promise.all([
          movieService.getMovies('now_playing'),
          movieService.getMovies('popular'),
          movieService.getMovies('top_rated'),
          movieService.getMovies('upcoming'),
        ]);
        setHeroMovie(nowPlayingRes[0] || null);
        setPopular(popularRes);
        setTopRated(topRes);
        setUpcoming(upcomingRes);
      } catch (err) {
        console.error("Xatolik yuz berdi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center text-xl text-red-500 animate-pulse">Yuklanmoqda...</div>;

  return (
    <div className="pb-12">
      {/* Hero Section */}
      {heroMovie && (
        <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden mb-10">
          <div className="absolute inset-0 bg-linear-to-r from-[#0f0f14] via-[#0f0f14]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f0f14] via-transparent to-transparent z-10" />
          <img 
            src={`https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`} 
            alt={heroMovie.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute bottom-16 left-4 md:left-12 z-20 max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-yellow-400 font-medium">
              <Star className="w-5 h-5 fill-current" /> {heroMovie.vote_average.toFixed(1)} IMDb
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight line-clamp-2">{heroMovie.title}</h1>
            <p className="text-gray-300 md:text-lg line-clamp-3 max-w-xl">{heroMovie.overview}</p>
            <Link to={`/movie/${heroMovie.id}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-red-600/30">
              <Play className="w-5 h-5 fill-current" /> Tomosha qilish
            </Link>
          </div>
        </div>
      )}

      {/* Movie Rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <MovieRow title="Ommabop Kinolar" movies={popular} />
        <MovieRow title="Eng Yuqori Reytingli" movies={topRated} />
        <MovieRow title="Tez Kunlarda" movies={upcoming} />
      </div>
    </div>
  );
}

function MovieRow({ title, movies }: { title: string, movies: Movie[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-red-600 pl-3">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.slice(0, 5).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}