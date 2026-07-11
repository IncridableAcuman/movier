import axios from 'axios';
import type { Movie, MovieDetails, Video } from '../types';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // Spring Boot portingiz
});

export const movieService = {
  getMovies: async (category: 'now_playing' | 'popular' | 'top_rated' | 'upcoming'): Promise<Movie[]> => {
    // Backend @JsonProperty("results") bergani uchun "results" deb qabul qilamiz
    const res = await API.get<{ results: Movie[] }>(`/movie?category=${category}`);
    return res.data.results || []; 
  },

  getMovieDetails: async (id: number): Promise<MovieDetails> => {
    const res = await API.get<MovieDetails>(`/movie/${id}`);
    return res.data;
  },

  searchMovies: async (query: string): Promise<Movie[]> => {
    // Bu yerda ham MovieResponse ishlatilgan, demak yana "results" keladi
    const res = await API.get<{ results: Movie[] }>(`/search/movie?query=${query}`);
    return res.data.results || [];
  },

  getMovieVideos: async (id: number): Promise<Video[]> => {
    // VideoResponse.java da ham @JsonProperty("results") bor
    const res = await API.get<{ results: Video[] }>(`/movie/${id}/videos`);
    return res.data.results || [];
  }
};