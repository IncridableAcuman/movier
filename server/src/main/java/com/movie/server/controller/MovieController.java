package com.movie.server.controller;

import com.movie.server.dto.MovieResponse;
import com.movie.server.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movie")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<MovieResponse> getMovies(@RequestParam String category){
        return ResponseEntity.ok(movieService.getMovies(category));
    }
}
