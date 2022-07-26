package com.ssafy.db.entity.webclass;

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
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.message.UserMessage;
import com.ssafy.db.entity.user.Profile;
import com.ssafy.db.entity.user.User;
import com.ssafy.db.entity.user.UserRole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class UserCourse {
	
	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="course_id")
	private Course course;
}
