package com.movie.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Video {
    private String name;
    private String key;
    private int size;
    private String type;
    @JsonProperty("published_at")
    public String publishedAt;
    private String id;
}
