package com.ssafy.db.entity.message;

import java.util.Date;

import javax.persistence.*;

import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Message {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="message_id")
	private Long messageId;
	
	@Column(name="message_title")
	private String messageTitle;
	
	@Column(name="message_content")
	@Lob
	private String messgaeCotent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_message_id")
	private UserMessage usermessage;
	
	
}
