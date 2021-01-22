package com.axe1.demo.Entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;


import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
public class Article {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NonNull
    private String titre ;
    @NonNull
    @Column(columnDefinition = "MEDIUMTEXT")
    private String contenue ;
    private Date date ;
    @ManyToOne
    private User auteur ;
    @OneToMany (mappedBy = "article")
    List<Commentaire> commentaires;
}
