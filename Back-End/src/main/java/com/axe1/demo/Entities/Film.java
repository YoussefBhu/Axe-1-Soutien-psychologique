package com.axe1.demo.Entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Film {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String Nom ;
    private String Duration ;
    private String Genre ;
    private String Description ;
    private String Emplacement ;
}
