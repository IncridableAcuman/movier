package com.movie.server.exception;

public class CustomInternalServerError extends RuntimeException{
    public CustomInternalServerError(String message){
        super(message);
    }
}
