package com.movie.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductionCompanies {
    private long id;

    @JsonProperty("logo_path")
    private String logoPath;

    private String name;

    @JsonProperty("origin_country")
    private String originCountry;
}
