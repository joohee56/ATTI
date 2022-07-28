package com.ssafy.atti.db.entity.webclass;

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
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ssafy.atti.db.entity.depart.Comment;
import com.ssafy.atti.db.entity.depart.Post;
import com.ssafy.atti.db.entity.message.UserMessage;
import com.ssafy.atti.db.entity.user.Profile;
import com.ssafy.atti.db.entity.user.User;
import com.ssafy.atti.db.entity.user.UserRole;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Course {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="course_id")
	private Long courseId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="course_start_time")
	private Date courseStartTime;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="course_end_time")
	private Date courseEndTime;
	
	@Temporal(TemporalType.DATE)
	@Column(name="course_date")
	private Date courseDate;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private User make_user;
	
	@OneToOne(mappedBy = "cousre", fetch = FetchType.LAZY)
    private WebClass webclass;
	
	@OneToMany(mappedBy = "user")
	private List<UserCourse> usercourse = new ArrayList<>();
}
