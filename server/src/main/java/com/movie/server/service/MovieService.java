package com.movie.server.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.movie.server.dto.MovieDetails;
import com.movie.server.dto.MovieResponse;
import com.movie.server.dto.VideoResponse;

import lombok.RequiredArgsConstructor;

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
    public MovieResponse searchMovie(String query){
        String url = apiUrl + "/search/movie?include_adult=false&language=en-US&page=1&query=" + query + "&api_key=" + apiKey;
        return restTemplate.getForObject(url, MovieResponse.class);
    }
    // get movie video with movie id
    public VideoResponse getVideos(Long id){
        String url=apiUrl+"/movie/"+id+"/videos"+"?include_adult=false&language=en-US&page=1&api_key="+apiKey;
        return restTemplate.getForObject(url,VideoResponse.class);
    }
}
