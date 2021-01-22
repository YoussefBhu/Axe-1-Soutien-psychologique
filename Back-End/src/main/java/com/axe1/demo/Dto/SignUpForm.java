package com.axe1.demo.Dto;


import lombok.Data;

import java.lang.reflect.Field;
import java.util.List;

@Data
public class SignUpForm {
    private String userName ;
    private String password ;
    private String name ;
    private String prenom ;
    private String email ;
    private String num ;
    private String datenaissance ;
    private String type ;
    private List<String> roles ;

    public boolean checkNull() throws IllegalAccessException {
        for (Field f : getClass().getDeclaredFields())
            if (f.get(this) == null && f.getName()!="roles")
                return true;
        return false;
    }
}
