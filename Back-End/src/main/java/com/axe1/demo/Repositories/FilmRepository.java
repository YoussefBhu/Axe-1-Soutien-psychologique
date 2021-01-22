package com.axe1.demo.Repositories;

import com.axe1.demo.Entities.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film,Long> {
}
