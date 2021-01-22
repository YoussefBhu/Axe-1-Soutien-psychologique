package com.axe1.demo.Controllers;

import com.axe1.demo.Dto.SignUpForm;
import com.axe1.demo.Entities.User;
import com.axe1.demo.Exceptions.ObjectEmpty;
import com.axe1.demo.Repositories.RoleRepository;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("Management/Users")
@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin
public class UserController  {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "ById/{UserId}")
    public User GetByUserId(@PathVariable("UserId") Long UserId){
        Optional<User> user = userRepository.findById(UserId);
        if(user.isEmpty()){
            return  null ;
        }
        return user.get();
    }

    @GetMapping(path = "/{UserName}")
    public User GetByUserName(@PathVariable("UserName") String UserName){
       User user = userRepository.findByUserName(UserName);
        if(user == null){
            return  null ;
        }
        return user;
    }

    @PutMapping(path="/{UserName}/ChangeState")
    @ResponseStatus(HttpStatus.OK)
    public String ChangeState(@PathVariable("UserName") String UserName ){
        User user = userRepository.findByUserName(UserName);
        user.setActive(!user.getActive());
        userRepository.save(user);
        return "Account state changed";
    }

    @GetMapping
    public List<User> GetUser(){
        return  userRepository.findAll();
    }

    @PostMapping(path = "/CreateUser")
    public void CreateUser(@RequestBody SignUpForm signUpForm) throws IllegalAccessException, ObjectEmpty {
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
           for(String role : signUpForm.getRoles())
               user.getRoles().add(roleRepository.findByName(role));
            userRepository.save(user);
        }
        else {
            throw new ObjectEmpty();
        }
    }

}
