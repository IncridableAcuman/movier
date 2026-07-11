package com.movie.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class MovieDetails {

    @JsonProperty("backdrop_path")
    private String backdropPath;

    @JsonProperty("belongs_to_collection")
    private BelongsToCollection collection;

    @JsonProperty("genres")
    private List<Genres> genres;

    private String homepage;
    private Long id;

    @JsonProperty("imdb_id")
    private String imdbId;

    @JsonProperty("origin_country")
    private List<String> originCountry;

    @JsonProperty("original_language")
    private String originalLanguage;

    @JsonProperty("original_title")
    private String originalTitle;

    private String overview;

    @JsonProperty("poster_path")
    private String posterPath;

    private double popularity;

    @JsonProperty("production_companies")
    private List<ProductionCompanies> companies;

    @JsonProperty("production_countries")
    private List<ProductionCountries> countries;

    @JsonProperty("release_date")
    private Date releaseDate;

    @JsonProperty("spoken_languages")
    private List<SpokenLanguages> languages;

    private String status;

    @JsonProperty("tagline")
    private String tagline;

    @JsonProperty("title")
    private String title;

    @JsonProperty("vote_average")
    private double voteAverage;

    @JsonProperty("vote_count")
    private int voteCount;
}
