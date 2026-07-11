package com.movie.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SpokenLanguages {
    @JsonProperty("english_name")
    private String englishName;
    private String name;
}
