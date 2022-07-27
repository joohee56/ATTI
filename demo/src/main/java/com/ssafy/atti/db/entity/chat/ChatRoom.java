package com.ssafy.atti.db.entity.chat;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ssafy.atti.db.entity.webclass.WebClass;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class ChatRoom {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="chatroom_id")
	private Long chatroomId;
	
	@OneToMany(mappedBy = "chatroom")
    private List<Chat> chats = new ArrayList<>();
	
	@OneToOne(fetch=FetchType.LAZY)
	private WebClass webclass;
}
