package com.axe1.demo.Security;

import com.axe1.demo.Entities.User;
import com.axe1.demo.Repositories.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user =  userRepository.findByUserName(s);
        if(user == null) throw new UsernameNotFoundException("Utilisateur inconnu");
        return new MyUserDetails(user);
    }
}
