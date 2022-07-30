package com.ssafy.db.entity.chat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.db.entity.message.Message;
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
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatCategory {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="chat_category_id")
	private Long chatCategoryId;
	
	@Column(name="chat_category_name")
	private String chatCategoryName;
	
	@OneToMany(mappedBy = "chatcategory")
    private List<Chat> chats = new ArrayList<>();
}
