package com.axe1.demo.Repositories;

import com.axe1.demo.Entities.FilmSuggestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmSuggestionRepository extends JpaRepository<FilmSuggestion,Long> {
}
