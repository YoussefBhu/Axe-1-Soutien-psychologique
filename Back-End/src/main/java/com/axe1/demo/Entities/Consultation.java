package com.axe1.demo.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    @ManyToOne
    private User patient ;
    @ManyToOne
    private User psychologue ;
    private Date date ;
    private String sujet ;
    private String ChatLink ;
    private Boolean active;
    private Boolean Checked;
    private String note ;
}
