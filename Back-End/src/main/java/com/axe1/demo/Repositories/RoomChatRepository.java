package com.axe1.demo.Repositories;

import com.axe1.demo.Entities.RoomChat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomChatRepository extends JpaRepository<RoomChat,Long> {
}
