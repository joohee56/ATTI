package com.ssafy.db.entity.chat;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.depart.UserPostMention;
import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.user.Auth;
import com.ssafy.db.entity.user.Profile;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.user.UserRole;

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
public class Chat{
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="chat_id")
	private Long chatId;
	
	@Column(name="write_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date writeDate;
	
	@Column(name="answer_info")
	private boolean answerInfo;
	
	@Column(name="chat_content")
	@Lob
	private String chatContent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="chat_category_id")
	private ChatCategory chatcategory;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="chat_room_id")
	private ChatRoom chatroom;
	
//	연관 관계 메소드
	public void setUser(User user) {
		this.user = user;
		user.getChats().add(this);
	}
	
	public void setChatCategory(ChatCategory chatcategory) {
		this.chatcategory = chatcategory;
		chatcategory.getChats().add(this);
	}
	
	public void setChatRoom(ChatRoom chatroom) {
		this.chatroom = chatroom;
		chatroom.getChats().add(this);
	}
	
	
}
