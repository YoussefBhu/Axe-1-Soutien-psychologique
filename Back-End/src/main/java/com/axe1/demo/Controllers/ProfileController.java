package com.axe1.demo.Controllers;

import com.axe1.demo.Dto.Profile;
import com.axe1.demo.Entities.User;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Profiles")
@CrossOrigin
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/{name}")
    public Profile GetProfile(@PathVariable(name = "name") String name){
        User user = userRepository.findByUserName(name);
        Profile profile = new Profile(user.getName(),user.getName(),user.getPrenom(),user.getType());
        return profile;
    }
}
