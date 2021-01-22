package com.axe1.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;


import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Commentaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NonNull
    private String Contenue ;
    @ManyToOne
    private User auteur ;
    private Date date ;
    @ManyToOne
    @JsonIgnore
    private Article article;

}
