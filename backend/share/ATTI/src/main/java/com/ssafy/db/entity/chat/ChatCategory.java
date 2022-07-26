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
import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class ChatCategory {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="chat_category_id")
	private Long chatCategoryId;
	
	@Column(name="chat_category_name")
	private String chatCategoryName;
	
	@OneToMany(mappedBy = "chatcategory")
    private List<Chat> chats = new ArrayList<>();
}
