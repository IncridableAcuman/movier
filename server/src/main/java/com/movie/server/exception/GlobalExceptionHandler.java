package com.movie.server.exception;

import com.movie.server.dto.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomInternalServerError.class)
    public ResponseEntity<ErrorResponse> customInternalServerErrorHandler(CustomInternalServerError error, HttpServletRequest request){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ErrorResponse.from(
                error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                request
        ));
    }
}
