package com.ssafy.db.entity.chat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.Profile;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.user.UserRole;
import com.ssafy.db.entity.webclass.WebClass;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoom {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="chatroom_id")
	private Long chatroomId;
	
	@OneToMany(mappedBy = "chatroom")
    private List<Chat> chats = new ArrayList<>();
	
	@OneToOne(fetch=FetchType.LAZY)
	private WebClass webclass;
}
