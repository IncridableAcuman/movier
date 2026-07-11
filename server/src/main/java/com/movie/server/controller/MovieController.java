package com.movie.server.controller;

import com.movie.server.dto.MovieDetails;
import com.movie.server.dto.MovieResponse;
import com.movie.server.dto.VideoResponse;
import com.movie.server.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;

    @GetMapping("/movie")
    public ResponseEntity<MovieResponse> getMovies(@RequestParam String category){
        return ResponseEntity.ok(movieService.getMovies(category));
    }
    @GetMapping("/movie/{id}")
    public ResponseEntity<MovieDetails> getMovieDetails(@PathVariable Long id){
        return ResponseEntity.ok(movieService.getMovieDetails(id));
    }
    @GetMapping("/search/movie")
    public ResponseEntity<MovieResponse> searchMovie(@RequestParam String query){
        return ResponseEntity.ok(movieService.searchMovie(query));
    }
    @GetMapping("/movie/{id}/videos")
    public ResponseEntity<VideoResponse> getVideos(@PathVariable Long id){
        return ResponseEntity.ok(movieService.getVideos(id));
    }
}
