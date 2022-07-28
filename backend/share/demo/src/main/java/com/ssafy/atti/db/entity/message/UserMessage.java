package com.ssafy.atti.db.entity.message;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.ssafy.atti.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class UserMessage {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="user_message_id")
	private Long userMessageId;
	
	@Column(name="read_info")
	private boolean readInfo;
	
	@Column(name="send_date")
	private Date sendDate;
	
	
	@OneToMany(mappedBy = "usermessage")
    private List<Message> messages = new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User tuser;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User fuser;

}
