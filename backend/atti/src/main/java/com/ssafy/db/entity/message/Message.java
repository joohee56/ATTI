package com.ssafy.db.entity.message;

import java.util.Date;

import javax.persistence.*;

import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Message {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="message_id")
	private Long messageId;
	
	@Column(name="message_title")
	private String messageTitle;
	
	@Column(name="message_content")
	@Lob
	private String messageCotent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_message_id")
	private UserMessage usermessage;
	
	public void setUserMessage(UserMessage usermessage) {
		this.usermessage = usermessage;
		usermessage.getMessages().add(this);
	}
	
	
}
