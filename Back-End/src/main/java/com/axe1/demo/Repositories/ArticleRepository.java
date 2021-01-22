package com.axe1.demo.Repositories;

import com.axe1.demo.Entities.Article;
import com.axe1.demo.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article,Long> {
    public List<Article> findAllByAuteur(User user);
}
