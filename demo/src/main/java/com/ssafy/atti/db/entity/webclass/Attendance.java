package com.ssafy.atti.db.entity.webclass;

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

import com.ssafy.atti.db.entity.depart.Comment;
import com.ssafy.atti.db.entity.message.UserMessage;
import com.ssafy.atti.db.entity.user.User;
import com.ssafy.atti.db.entity.user.UserRole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Attendance {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="attendance_id")
	private Long attendanceId;
	
	@Lob
	@Column(name="attendance_content")
	private String attendancdContent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="webclass_id")
	private WebClass webclass;
	
}
