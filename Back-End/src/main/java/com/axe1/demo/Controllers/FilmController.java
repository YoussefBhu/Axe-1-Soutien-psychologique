package com.axe1.demo.Controllers;

import com.axe1.demo.Entities.Film;
import com.axe1.demo.Entities.FilmSuggestion;
import com.axe1.demo.Repositories.FilmRepository;
import com.axe1.demo.Repositories.FilmSuggestionRepository;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Films")
@CrossOrigin
public class FilmController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FilmSuggestionRepository filmSuggestionRepository;

    @Autowired
    private FilmRepository filmRepository;

    @GetMapping("/Suggestions")
    @PreAuthorize("hasRole('ADMIN')")
    public List<FilmSuggestion> GetFilmSuggestions(){
        return filmSuggestionRepository.findAll();
    }

    @PostMapping("/Suggestions")
    @PreAuthorize("hasRole('PSYCHOLOGUE')")
    public void AddFilmSuggestion(@RequestBody FilmSuggestion suggestion){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        suggestion.setUser(userRepository.findByUserName(auth.getName()));
        suggestion.setTreated(false);
        filmSuggestionRepository.save(suggestion);
    }

    @GetMapping
    public List<Film> GetMovies(){
        return filmRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void AddFilm(@RequestBody Film film){
        filmRepository.save(film);
    }

}
