package com.axe1.demo.Entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class FilmSuggestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @ManyToOne
    private User user ;
    private String nomFilm ;
    private String message ;
    private boolean treated;
}
