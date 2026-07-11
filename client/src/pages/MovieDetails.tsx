import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from '../services/api';
import { Calendar, Star } from 'lucide-react';
import type { MovieDetails as DetailsType,Video } from '../types';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<DetailsType | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchDetails = async () => {
      try {
        const [detailRes, videoRes] = await Promise.all([
          movieService.getMovieDetails(Number(id)),
          movieService.getMovieVideos(Number(id))
        ]);
        setMovie(detailRes);
        setVideos(videoRes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center text-red-550 text-xl animate-pulse">Yuklanmoqda...</div>;
  if (!movie) return <div className="text-center py-20 text-red-500">Kino topilmadi!</div>;

  const trailer = videos.find(v => v.type === 'Trailer' || v.type === 'Teaser');

  return (
    <div className="min-h-screen pb-12">
      {/* Backdrop Header */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-linear-to-t from-[#0f0f14] to-transparent z-10" />
        <img 
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
          alt={movie.title} 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto px-4 -mt-32 relative z-20">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="w-64 rounded-2xl shadow-2xl border border-gray-800"
          />
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black">{movie.title}</h1>
            {movie.tagline && <p className="text-xl text-gray-400 italic">"{movie.tagline}"</p>}
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {new Date(movie.release_date).toLocaleDateString()}</span>
              <span className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded"><Star className="w-4 h-4 fill-current"/> {movie.vote_average.toFixed(1)}</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {movie.genres.map(g => (
                <span key={g.id} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">{g.name}</span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">{movie.overview}</p>
          </div>
        </div>

        {/* Trailer Embed */}
        {trailer && (
          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3">Rasmiy Treyler</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}