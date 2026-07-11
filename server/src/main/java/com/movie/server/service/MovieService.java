package com.movie.server.service;

import com.movie.server.dto.MovieDetails;
import com.movie.server.dto.MovieResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class MovieService {
    @Value("${movie.api_key}")
    private String apiKey;
    @Value("${movie.api_url}")
    private String apiUrl;

    private final RestTemplate restTemplate;

    // get movies by now_playing,popular,top_rated,upcoming categories
    public MovieResponse getMovies(String category){
        String url = apiUrl+"/movie/"+category+"?language=en-US&page=1&api_key="+apiKey;
        return restTemplate.getForObject(url,MovieResponse.class);
    }
    // get a movie details by id
    public MovieDetails getMovieDetails(Long id){
        String url = apiUrl+"/movie/"+id+"?language=en-US&page=1&api_key="+apiKey;
        return restTemplate.getForObject(url,MovieDetails.class);
    }
}
