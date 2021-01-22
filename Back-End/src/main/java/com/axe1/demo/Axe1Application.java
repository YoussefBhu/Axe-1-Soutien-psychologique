package com.axe1.demo;

import com.axe1.demo.Entities.Consultation;
import com.axe1.demo.Entities.Role;
import com.axe1.demo.Entities.User;
import com.axe1.demo.Repositories.ConsultationRepository;
import com.axe1.demo.Repositories.RoleRepository;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@SpringBootApplication
public class Axe1Application implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(Axe1Application.class, args);
    }


    @Override
    public void run(String... args) throws Exception {

    }
}
