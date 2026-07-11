import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieService } from '../services/api';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) return;

        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const results = await movieService.searchMovies(query);
                setMovies(results);
            } catch (err) {
                console.error('Qidiruvda xatolik:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold mb-6 border-l-4 border-red-655 border-red-650 border-red-650 border-red-600 pl-3">
                "{query}" bo'yicha qidiruv natijalari
            </h1>

            {loading ? (
                <div className="text-center py-10 text-xl text-red-500 animate-pulse">Qidirilmoqda...</div>
            ) : movies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-505 text-gray-400">
                    Hech narsa topilmadi. Boshqa kalit so'z bilan urinib ko'ring.
                </div>
            )}
        </div>
    );
}