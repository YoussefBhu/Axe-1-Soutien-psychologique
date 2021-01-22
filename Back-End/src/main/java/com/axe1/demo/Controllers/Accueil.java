package com.axe1.demo.Controllers;

import com.axe1.demo.Dto.SignUpForm;
import com.axe1.demo.Entities.User;
import com.axe1.demo.Exceptions.ObjectEmpty;
import com.axe1.demo.Repositories.RoleRepository;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class Accueil {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping(path = "/SignUp")
    public void SignUp(@RequestBody SignUpForm signUpForm) throws IllegalAccessException, ObjectEmpty {
        if (!signUpForm.checkNull()) {
            User user = new User(
                    signUpForm.getUserName(),
                    bCryptPasswordEncoder.encode(signUpForm.getPassword()),
                    signUpForm.getName(),
                    signUpForm.getPrenom(),
                    signUpForm.getEmail(),
                    signUpForm.getNum(),
                    signUpForm.getDatenaissance(),
                    signUpForm.getType(),
                    true);
            user.getRoles().add(roleRepository.findByName("USER"));
            userRepository.save(user);
        }
        else {
            throw new ObjectEmpty();
       }
    }

    @GetMapping(path ="/Login")
    public User LogIn() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUserName(auth.getName());
        return user ;
    }

    @GetMapping(path="/CheckName/{Name}")
    public boolean CheckUserName(@PathVariable("Name") String Name){
        User user = userRepository.findByUserName(Name);
        if(user == null)
            return false;
        else
            return true;
    }

    @GetMapping(path="/CheckEmail/{Email}")
    public boolean CheckEmail(@PathVariable("Email") String Email){
        User user = userRepository.findByEmail(Email);
        if(user == null)
            return false;
        else
            return true;
    }
}
