package com.ssafy.db.entity.webclass;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
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

import com.ssafy.db.entity.chat.Chat;
import com.ssafy.db.entity.chat.ChatRoom;
import com.ssafy.db.entity.depart.Comment;
import com.ssafy.db.entity.depart.Post;
import com.ssafy.db.entity.message.UserMessage;
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
public class Course {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
	@JoinColumn(name="in_user_id")
	private User in_user;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "make_user_id")
	private User make_user;
	
	@OneToOne(mappedBy = "course", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private WebClass webclass;
	
	@OneToMany(mappedBy = "user")
	private List<UserCourse> usercourses = new ArrayList<>();
	
	public void setUser(User user) {
		this.in_user = user;
		user.getCourses().add(this);
	}
}
