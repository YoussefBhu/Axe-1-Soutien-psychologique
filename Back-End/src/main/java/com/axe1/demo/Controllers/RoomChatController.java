package com.axe1.demo.Controllers;

import com.axe1.demo.Entities.RoomChat;
import com.axe1.demo.Repositories.RoomChatRepository;
import com.axe1.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/RoomChats")
@CrossOrigin
public class RoomChatController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomChatRepository roomChatRepository;

    @GetMapping
    public List<RoomChat> GetRoomChats(){
        return roomChatRepository.findAll();
    }

    @DeleteMapping("/{Id}")
    @PreAuthorize("hasAnyRole('ADMIN','PSYCHOLOGUE')")
    public void DeleteRoomChat(@PathVariable("Id") Long id){
        roomChatRepository.deleteById(id);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','PSYCHOLOGUE')")
    public RoomChat CreateRoomChat(@RequestBody RoomChat roomChat){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        roomChat.setCreator(userRepository.findByUserName(auth.getName()));
        roomChatRepository.save(roomChat);
        return roomChat ;
    }

}
