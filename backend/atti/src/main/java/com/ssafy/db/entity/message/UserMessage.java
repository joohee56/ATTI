package com.ssafy.db.entity.message;

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
public class UserMessage {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_message_id")
	private Long userMessageId;
	
	@Column(name="read_info")
	private boolean readInfo;
	
	@Column(name="send_date")
	private Date sendDate;
	
	
	@OneToMany(mappedBy = "usermessage")
    private List<Message> messages = new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="to_user_id")
	private User tuser;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="from_user_id")
	private User fuser;
	
	public void setTuser(User user) {
		this.tuser = user;
		user.getTousers().add(this);
	}

	public void setFuser(User user) {
		this.fuser = user;
		user.getFromusers().add(this);
	}

}
