package com.movie.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class VideoResponse {
    private Long id;
    @JsonProperty("results")
    private List<Video> videos;
}
