package com.axe1.demo.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data

@NamedQueries({
      //  @NamedQuery(name = "User.findByUserName", query = "SELECT u FROM User u WHERE u.userName  = ?1 "),
        @NamedQuery(name = "User.findUsers", query = "SELECT u FROM User u join u.roles role where role.name = 'USER' "),
        @NamedQuery(name = "User.findPsychologues", query = "SELECT u FROM User u join u.roles role where role.name = 'PSYCHOLOGUE'"),
        @NamedQuery(name = "User.findAdmins" , query = "SELECT u FROM User u join u.roles role where role.name = 'ADMIN' ")
})

@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id ;
    @Column(unique = true)
    String userName ;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String password ;
    String name ;
    String prenom ;
    @Column(unique = true)
    String email ;
    String Num ;
    String datenaissance ;
    String type ;
    @ManyToMany(fetch = FetchType.EAGER)
    List<Role> roles = new ArrayList<Role>();
    Boolean Active ;

    public User(String userName, String password, String name, String prenom, String email, String num, String datenaissance, String type, Boolean active) {
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.prenom = prenom;
        this.email = email;
        Num = num;
        this.datenaissance = datenaissance;
        this.type = type;
        Active = active;
    }
}
