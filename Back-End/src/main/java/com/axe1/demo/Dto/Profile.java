package com.axe1.demo.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Profile {
    private String userName ;
    private String name ;
    private String prenom ;
    private String type ;
}
